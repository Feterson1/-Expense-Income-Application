import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { useAppDispatch } from "./utils/hooks/hooks";
import { getTokenFromLocalStorage } from "./helpers/localStorage.helper";
import { authService } from "./services/auth.service";
import { login, logout } from "./store/slice/user/userSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";


function App() {

  const dispatch = useAppDispatch();

  const checkAuth = async () => {

    const token = getTokenFromLocalStorage();

    try{
      if(token){
        const data = await authService.getProfile();
        if(data){
          dispatch(login(data));
        }else{
          dispatch(logout());
        }
      }

    }catch(err:any){
      const error = err.response?.data.message;
      toast.error(error.toString())
    }
  }

  useEffect(()=>{
    checkAuth();
  },[])

  return <RouterProvider router={router}/>

}

export default App;
