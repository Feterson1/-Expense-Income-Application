import {FC} from 'react'
import { useAuth } from '../../utils/hooks/useAuth';
import img from '../../assets/protected-web.jpg';


interface Props {
    children: JSX.Element

}

export const ProtectedRouteComponent:FC<Props> = ({children}) => {

    const isAuth = useAuth();

  return (<>
    {isAuth? 
    (children) : (<div className='flex flex-col justify-center  items-center gap-10'>
        <h1 className='text-2xl'>To View this page  you must be logged</h1>
        <img className='w-1/3' src={img} alt='img'/>
    
    </div>
    )}
    
    </>
)
}
