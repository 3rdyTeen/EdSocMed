import { FaBlog, FaHome, FaUserFriends } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdAccountCircle, MdNotifications } from "react-icons/md";
import { comm, profile } from "../assets";
import { useDispatch } from "react-redux";
import { useUserLogoutMutation } from "../redux/features/auth/authApiSlice";
import { setLogout } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import {myData} from '../helper'


const SocialMediaSidebar = () => {
    
    const { name, username } = myData();
    const [ userLogout ] = useUserLogoutMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();
        
        userLogout();
        dispatch(setLogout());
        navigate('/');
    }

  return (
    <div className='w-[300px] relative'>
        <div className="w-full h-full flex flex-col gap-[40px] px-[20px] overflow-hidden pt-[20px] relative z-10">
            <div className='w-full flex justify-center flex-col gap-3 z-10'>
                <div className='w-full flex justify-center relative'>
                    <div className='p-3 bg-[#00ADFF] rounded-full text-white absolute top-0 right-10'>
                        <FaBlog />
                    </div>
                    <div className="h-[130px] w-[130px] rounded-full bg-slate-200 overflow-hidden">
                        <img src={profile} alt="profile" className="object-cover" />
                    </div>
                </div>
            <div className="flex flex-col items-center gap-1">
                    <span className="text-black font-bold text-[14px] leading-3">{name}</span>
                    <span className="text-[#9FA7BE] font-regular text-[12px]">@{username}</span>
            </div>
            </div>
            <div className="w-full">
                <div className="w-full py-3 pl-5 flex gap-4 items-center rounded-md bg-black text-white hover:cursor-pointer hover:text-[18px]">
                    <FaHome />
                    <span className="font-bold text-[14px]">Newsfeed</span>
                </div>
                <div className="w-full py-3 pl-5 flex gap-4 items-center rounded-md text-black hover:cursor-pointer hover:text-[18px]">
                    <FaMessage />
                    <span className="font-bold text-[14px] ">Messages</span>
                </div>
                <div className="w-full py-3 pl-5 flex gap-4 items-center rounded-md text-black hover:cursor-pointer hover:text-[18px]">
                    <FaUserFriends />
                    <span className="font-bold text-[14px]">Friends</span>
                </div>
                <div className="w-full py-3 pl-5 flex gap-4 items-center rounded-md text-black hover:cursor-pointer hover:text-[18px]">
                    <MdNotifications />
                    <span className="font-bold text-[14px]">Notification</span>
                </div>
                <div 
                    onClick={handleLogout}
                    className="w-full py-3 pl-5 flex gap-4 items-center rounded-md text-black hover:cursor-pointer hover:text-[18px]">
                    <MdAccountCircle />
                    <span className="font-bold text-[14px]">Account</span>
                </div>
                
            </div>
        </div>
        

        <img src={comm} alt="communications" className="bottom-0 right-0 z-0 w-[70%] h-auto absolute" />
    </div>
  )
}

export default SocialMediaSidebar