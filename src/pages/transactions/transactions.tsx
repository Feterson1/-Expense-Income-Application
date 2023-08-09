import React from 'react'
import TranasctionFormComponent from '../../components/transactions/transactionForm'
import { instance } from '../../api/axios.api';
import { ICategory, IResponseTransactionLoader, ITransaction } from '../../types/types';
import { toast } from 'react-toastify';
import TranasctionTable from '../../components/transactions/transactionTable';
import { useLoaderData } from 'react-router-dom';
import { formatToUSD } from '../../helpers/currency.helper';
import ChartComponent from '../../components/chart/chart';



export const TransactionLoader = async () => {
  const categories = await instance.get<ICategory[]>('/categories');
  const transactions =  await instance.get<ITransaction[]>('/transactions');
  const totalIncome = await instance.get<number>('transactions/income/find');
  const totalExpense = await instance.get<number>('transactions/expense/find');
  const data = {
    categories: categories.data,
    transactions: transactions.data,
    totalExpense: totalExpense.data,
    totalIncome: totalIncome.data,

  };
  return data;

}
 


export const TransactionAction = async ({request}:any) => {
  
  switch(request.method){
    
    case 'POST': {
      const formData = await request.formData();


      const newTransaction = {
        title: formData.get('title'),
        amount: +formData.get('amount'),
        type: formData.get('type'),
        category: formData.get('category'),
      }
      await instance.post('/transactions',newTransaction);
      toast.success('Transaction added');
      return null;
    }
    case 'DELETE' : {
      const formData = await request.formData();
      const transaction_id = formData.get('id');
      await instance.delete(`transactions/transaction/${transaction_id}`);
      toast.success('Transaction deleted');
      return null;


    }
  }

}

const TransactionsPage:React.FC = () => {

  const {totalExpense,totalIncome} = useLoaderData() as IResponseTransactionLoader;
  




  return (
    <>
    <div className='grid grid-cols-3 gap-4 mt-4 items-start'>
      {/* Add transaction block */}
      <div className='col-span-2 grid'>
        <TranasctionFormComponent/>
      </div>
        {/* Statistic block */}
        <div className="rounded-md bg-slate-800 p-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className='text-md text-center font-bold uppercase'>
                Total Income
                </p>
              <p className="bg-green-600 mt-2 rounded-sm p-1 text-center">
               {formatToUSD.format(totalIncome)}
              </p>
              <p className='text-md text-center font-bold uppercase'>
                Total Expense
              </p>
              <p className="bg-red-600 mt-2 rounded-sm p-1 text-center">
                {formatToUSD.format(totalExpense)}
              </p>
            </div>
          </div>
          <><ChartComponent totalExpense={totalExpense} totalIncome={totalIncome}/></>
        </div>
      
    </div>
    {/* Transactions table */}
    <h1 className="my-5"><TranasctionTable limit={5}/></h1>
    </>
  )
}

export default TransactionsPage