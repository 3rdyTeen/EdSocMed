import { useState } from "react";
import { Login, Signup } from "../components";
import { auth_pic } from "../assets"

const Auth = () => {
    const [ isLogin, setisLogin ] = useState(true);

  return (
    <div className='w-full h-full flex justify-center items-center bg-slate-200'>
        <div className='w-[900px] rounded-lg shadow-lg flex bg-white'>
            <div className='flex flex-1'>
                <img src={auth_pic} alt="image" className="object-cover w-full h-auto" />
            </div>
            {isLogin ? (
                <Login isLogin={() => setisLogin(false)} />
            ) : (
                <Signup isLogin={() => setisLogin(true)} />
            )}
        </div>
    </div>
  )
}

export default Auth