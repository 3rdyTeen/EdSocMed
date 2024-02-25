import { auth_pic } from "../assets"
import { useAuth } from "../hooks";
import { Outlet, Navigate, useLocation } from "react-router-dom"

const AuthLayout = () => {

    const isLoggedIn = useAuth();
    const location = useLocation();

    if(isLoggedIn){
        return <Navigate to="/" state={{from: location}} replace />
    }

  return (
    <div className='w-full h-full flex justify-center items-center bg-slate-200'>
        <div className='w-[900px] rounded-lg shadow-lg flex bg-white'>
            <div className='flex flex-1'>
                <img src={auth_pic} alt="image" className="object-cover w-full h-auto" />
            </div>
            <Outlet />
        </div>
    </div>
  )
}

export default AuthLayout