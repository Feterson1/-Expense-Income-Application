import React from 'react'
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts'


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

interface IChart{
    totalExpense: number
    totalIncome: number
}

interface IData{
    value:number
    name: string
}

const ChartComponent: React.FC<IChart> = ({totalExpense,totalIncome}) => {

    const data = new Array<IData>(
        {value: totalExpense, name: 'Expense'},
        {value: totalIncome, name: 'Income'},
    );

  return (
    <div>
        <PieChart width={240} height={240} >
        <Pie
          data={data}
          cx={'50%'}
          cy={'50%'}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend/>
        <Tooltip/>
      </PieChart>
    </div>
  )
}

export default ChartComponent