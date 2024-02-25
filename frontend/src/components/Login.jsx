import { useState } from "react";
import { FaInfoCircle, FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../redux/features/auth/authApiSlice";
import { setCredentials } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ login, {isLoading} ] = useLoginMutation();
    const [ showPassword, setShowPassword ] = useState(false);

    const [ values, setValues ] = useState({
        email: '',
        password: ''
    })

    const [ alert, setAlert ] = useState({
        isSet: false,
        isSuccess: true,
        msg: ''
    })

    const { email, password } = values;

    const handleChange = (e) =>
        setValues({ ...values, [e.target.name]: e.target.value })

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const { message, data } = await login({ email, password }).unwrap();
            dispatch(setCredentials(data))

            setValues({
                email: '',
                password: ''
            })

            setAlert({
                isSet: true,
                isSuccess: true,
                msg: message
            });

            navigate('/')
        } catch (err) {
            setAlert({
                isSet: true,
                isSuccess: false,
                msg: err?.data?.error || "Server Error"
            });
        }
    }

  return (
    <div className="w-[400px] flex flex-col items-center py-8 mx-8">
        <h1 className="text-[24px] font-bold">Sign In</h1>
        <h3 className="text-[12px] text-gray-500 text-center">
            By signing in you'll be connected again to your family and friends. 
        </h3>
        <div onClick={() => navigate('/auth/signup')} 
            className="text-violet-500 font-semibold text-[12px] underline hover:cursor-pointer"> 
            I dont have account.
        </div>

        <form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col my-5 gap-2">
                {alert.isSet && (
                    <div className={`w-full p-2 font-semibold text-[12px] text-white rounded flex justify-center ${alert.isSuccess ? "bg-blue-400" : "bg-red-400"}`}>
                        {alert.msg}
                    </div>
                )}
                <div className="flex flex-col">
                    <label htmlFor="username" className="text-gray-500 text-[12px]">Email</label>
                    <div className="flex w-full items-center gap-1">
                        <div className="w-full flex border-2 rounded-md p-2">
                            <input 
                                type="text" 
                                name="email" 
                                id="email" 
                                placeholder="Email" 
                                value={email}
                                onChange={handleChange}
                                className=" focus:outline-none w-full" />  
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password" className="text-gray-500 text-[12px]">Password</label>
                    <div className="flex w-full items-center gap-1">
                        <div className="w-full flex gap-4 border-2 rounded-md p-2 items-center">
                            <input 
                                type={showPassword ? "text" : "password"} 
                                name="password" 
                                id="password" 
                                placeholder="Password" 
                                value={password}
                                onChange={handleChange}
                                className=" focus:outline-none w-full flex flex-1" 
                            />
                            {showPassword ? (
                                <FaEyeSlash onClick={() => setShowPassword(false)} className="hover:cursor-pointer" title="Hide Password." />
                            )
                            : (
                                <FaEye onClick={() => setShowPassword(true)} className="hover:cursor-pointer" title="Show Password." />
                            )}
                            
                        </div>
                    </div>
                </div>
            </div>  
            <button 
                className="flex items-center rounded-full font-semibold py-2 px-6 float-right bg-violet-700 text-white"
                disabled={isLoading}>
                    {isLoading ? "Loading.." : "Sign In"}
            </button>
        </form>
    </div>
  )
}

export default Login