import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderComponent from '../../components/header/header'

const LayoutPage:React.FC = () => {
  return (
    <div className='min-h-screen bg-slate-900 pb-20 font roboto text-white'>
       <HeaderComponent/>
       <div className='container'>
        <Outlet/>

       </div>
    </div>
  )
}

export default LayoutPage