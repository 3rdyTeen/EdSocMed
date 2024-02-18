import { useState, useRef } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useSignupMutation } from "../redux/features/auth/authApiSlice";

const Signup = ({ isLogin }) => {
    const [ signup, {isLoading} ] = useSignupMutation();

    const [ alert, setAlert ] = useState({
        isSet: false,
        isSuccess: true,
        msg: ''
    })
    const [ showPassword, setShowPassword ] = useState(false);
    const [ showConfirmPassword, setShowConfirmPassword ] = useState(false);

    const loginRef = useRef();

    const [ values, setValues ] = useState({
        first_name : '',
        last_name : '',
        email : '',
        password : '',
        c_password: ''
    })

    const { first_name, last_name, email, password, c_password } = values;

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    } 

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const user = await signup({ first_name, last_name, email, password}).unwrap()
            
            setValues({
                first_name : '',
                last_name : '',
                email : '',
                password : '',
                c_password: ''
            })

            setAlert({
                isSet: true,
                isSuccess: true,
                msg: user?.message
            });

            setTimeout(() => {
                loginRef.current.click();
            }, 1000);
            
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
        <form onSubmit={handleSubmit}>
            <h1 className="text-[24px] font-bold text-center">Sign Up</h1>
            <h3 className="text-[12px] text-gray-500 text-center">
                Create account now to experience best social app right now. 
            </h3>
            <div onClick={isLogin} ref={loginRef} className="text-violet-500 font-semibold text-[12px] text-center underline hover:cursor-pointer"> I have already an account.</div>
            
            <div className="w-full flex flex-col my-5 gap-2">
                {alert.isSet && (
                    <div className={`w-full p-2 font-semibold text-[12px] text-white rounded flex justify-center ${alert.isSuccess ? "bg-blue-400" : "bg-red-400"}`}>
                        {alert.msg}
                    </div>
                )}

                <div className="flex gap-1">
                    <div className="w-1/2 flex flex-col">
                        <label htmlFor="first_name" className="text-gray-500 text-[12px]">First Name</label>
                        <div className="w-full flex gap-4 border-2 rounded-md p-2 items-center">
                            <input 
                                type="text" 
                                name="first_name" 
                                id="first_name" 
                                placeholder="First Name" 
                                value={first_name}
                                onChange={handleChange}
                                className=" focus:outline-none w-full" />
                        </div>
                    </div>

                    <div className="w-1/2 flex flex-col">
                        <label htmlFor="last_name" className="text-gray-500 text-[12px]">Last Name</label>
                        <div className="w-full flex gap-4 border-2 rounded-md p-2 items-center">
                            <input 
                                type="text" 
                                name="last_name" 
                                id="last_name" 
                                placeholder="Last Name" 
                                value={last_name}
                                onChange={handleChange}
                                className=" focus:outline-none w-full" />
                        </div>
                    </div>
                    
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-gray-500 text-[12px]">Email</label>
                    <div className="w-full flex gap-4 border-2 rounded-md p-2 items-center">
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
                <div className="flex gap-1">
                    <div className="w-1/2 flex flex-col">
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
                    <div className="w-1/2 flex flex-col">
                        <label htmlFor="c_password" className="text-gray-500 text-[12px]">Confirm Password</label>
                        <div className="flex w-full items-center gap-1">
                            <div className="w-full flex gap-4 border-2 rounded-md p-2 items-center">
                                <input 
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="c_password" 
                                    id="c_password" 
                                    placeholder="Confirm Password" 
                                    value={c_password}
                                    onChange={handleChange}
                                    className=" focus:outline-none w-full flex flex-1" />
                                {showConfirmPassword ? (
                                    <FaEyeSlash onClick={() => setShowConfirmPassword(false)} className="hover:cursor-pointer" title="Hide Password." />
                                )
                                : (
                                    <FaEye onClick={() => setShowConfirmPassword(true)} className="hover:cursor-pointer" title="Show Password." />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button 
                className="flex items-center float-right rounded-full font-semibold py-2 px-6 bg-violet-700 text-white" 
                disabled={isLoading}>
                    {isLoading ? "Loading.." : "Sign Up"}
            </button>
        </form>
    </div>
  )
}

export default Signup