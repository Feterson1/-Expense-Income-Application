import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import { Form, useLoaderData } from 'react-router-dom';
import { IResponseTransactionLoader } from '../../types/types';
import CategoryModal from '../categoryModal/CategoryModal';






 
const TranasctionFormComponent: React.FC = () => {
  const {categories} = useLoaderData() as IResponseTransactionLoader;
  const [visible,setVisibleModal] = useState(false);

  return (
    <div className='rounded-md bg-slate-800 p-4'>
      <Form className='grid gap-2' method='post' action='/transactions'>
        <label className='grid'  htmlFor="title">
          <span>Title</span>
          <input type="text" className='input border-slate-700'placeholder='Title...' name='title' required/>
        </label>
        <label className='grid' htmlFor="amount">
          <span>Amount</span>
          <input type="number" className='input border-slate-700'placeholder='Amount...' name='amount' required/>
        </label>
        
        {/* Select */}
       {categories.length ? 
       ( 
       <label htmlFor="category" className='grid'>
          <span>Category</span>
          <select className='input border-slate-700' name="category" required>
            {
              categories.map((category,index) => (
                <option key={index} value={category.id}> {category.title}</option>
              ) )
            
            
            
            }
           
           
          </select>
        </label>)
        :
        (
          <h1 className='mt-1 text-red-300'>To continue create a category first</h1>
        )
        
      }
        {/* Add category */}
      <button 
      onClick={ () => {setVisibleModal(true)}} 
      className=' flex max-w-fit items-center gap-2 text-white/50 hover:text-white'>
        <FaPlus/>
        <span>Manage categories</span>
      </button>
     
     {/* Radio buttons */}
     <div className="flex gap-4 items-center">
      <label className='cursor-pointer flex items-center gap-2' htmlFor="">
        <input type="radio" name='type' value={'income'} className='form-radio text-blue-600' />
        <span>Income</span>
      </label>
      <label className='cursor-pointer flex items-center gap-2' htmlFor="">
        <input type="radio" name='type' value={'expense'} className='form-radio text-blue-600' />
        <span>expense</span>
      </label>
     </div>
     {/* Submit button */}
     <button className='btn btn-green max-w-fit mt-2' type='submit'>Submit</button>

     

      </Form>

       {/* Add category modal */}
    {visible && ( <CategoryModal type='post' setVisibleModal={setVisibleModal}/> )}
      </div>
      
  )
}

export default TranasctionFormComponent;