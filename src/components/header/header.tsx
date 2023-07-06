import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FaBtc , FaSignOutAlt} from 'react-icons/fa';

const HeaderComponent: React.FC = () => {

    const isAuth = true;

  return (
    <header className='flex items-center justify-between p-4 shadow-sn bg-slate-800 backdrup-blur-sm'>
        <Link to={"/"}>
            <FaBtc size={20}/>
        </Link>
        {/* Menu */}
        {
            isAuth && (
                <nav className='ml-auto mr-10'>
                    <ul className="flex items-center gap-5 ">
                        <li>
                            <NavLink to={'/'} className={({isActive})=> isActive? 'text-white' : 'text-white/50'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/transactions'} className={({isActive})=> isActive? 'text-white' : 'text-white/50'}>Transactions</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/categories'} className={({isActive})=> isActive? 'text-white' : 'text-white/50'}>Categories</NavLink>
                        </li>
                    </ul>
                </nav>
            )
        }
        {/* Actions */}
        {
            isAuth ? 
            (
                <button className="btn btn-red">
                    <span>Log out</span>
                    <FaSignOutAlt/>
                </button>

            ) 
            : 
            (
                <Link className='py-2 text-white/50 hover:text-white ml-auto' to={'auth'}>
                    Log in / Sign in
                </Link>

            )
        }
    </header>
  )
}

export default HeaderComponent