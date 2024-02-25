import { profile, image, image2 } from "../assets"
import { SlOptionsVertical } from "react-icons/sl";
import { FaRegComment, FaRegHeart, FaRegShareSquare } from "react-icons/fa";

const Posts = () => {
  return (
    <div className="flex flex-col gap-4">
        {/* post 1 */}
        <div className="w-full flex flex-col rounded-lg shadow-md bg-[#DCE6FF] py-3 px-6 gap-2">
            {/* post header */}
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-[35px] h-[35px] rounded-full bg-black overflow-hidden border-2 border-black">
                        <img src={profile} alt="profile" className="object-cover" />
                    </div>
                    <div className="flex flex-col leading-3">
                        <span className="font-bold text-[14px]">Jose Rizal</span>
                        <span className="text-[12px] text-slate-400">3 hours ago</span>
                    </div>
                </div>
                <div className="text-[12px] hover:cursor-pointer">
                    <SlOptionsVertical />
                </div>
            </div>
            {/* post content */}
            <div className="w-full min-h-[50px] px-1 py-3">
                Hi everyone, this is the first post.
            </div>
            {/* post actions */}
            <div className="flex justify-center gap-3">
                <div className="flex gap-2 items-center font-semibold px-4 py-2 rounded-full bg-slate-300">
                    <span className="text-[12px]">10</span>
                    <FaRegHeart className="hover:cursor-pointer text-[16px]" />
                </div>
                <div className="flex gap-2 items-center font-semibold px-4 py-2 rounded-full bg-slate-300">
                    <span className="text-[12px]">5</span>
                    <FaRegComment className="hover:cursor-pointer text-[16px]" />
                </div>
                <div className="flex gap-2 items-center font-semibold px-4 py-2 rounded-full bg-slate-300">
                    <span className="text-[12px]">1</span>
                    <FaRegShareSquare className="hover:cursor-pointer text-[16px]" />
                </div>
            </div>
        </div>

        {/* post 2 */}
        <div className="w-full flex flex-col rounded-lg shadow-md bg-[#FCADBD] py-3 px-6 gap-2">
            {/* post header */}
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-[35px] h-[35px] rounded-full bg-black overflow-hidden border-2 border-black">
                        <img src={profile} alt="profile" className="object-cover" />
                    </div>
                    <div className="flex flex-col leading-3">
                        <span className="font-bold text-[14px]">Jose Rizal</span>
                        <span className="text-[12px] text-slate-400">16 hours ago</span>
                    </div>
                </div>
                <div className="text-[12px] hover:cursor-pointer">
                    <SlOptionsVertical />
                </div>
            </div>
            {/* post content */}
            <div className="w-full min-h-[50px] px-1 py-3">
                <img src={image} alt="post image" className="w-full max-h-[500px] object-cover" />
            </div>
            {/* post actions */}
            <div className="flex justify-center gap-3">
                <div className="flex gap-2 items-center font-semibold px-4 py-2 rounded-full bg-slate-300">
                    <span className="text-[12px]">10</span>
                    <FaRegHeart className="hover:cursor-pointer text-[16px]" />
                </div>
                <div className="flex gap-2 items-center font-semibold px-4 py-2 rounded-full bg-slate-300">
                    <span className="text-[12px]">5</span>
                    <FaRegComment className="hover:cursor-pointer text-[16px]" />
                </div>
                <div className="flex gap-2 items-center font-semibold px-4 py-2 rounded-full bg-slate-300">
                    <span className="text-[12px]">1</span>
                    <FaRegShareSquare className="hover:cursor-pointer text-[16px]" />
                </div>
            </div>
        </div>
            
        {/* post 3 */}
        <div className="w-full flex flex-col rounded-lg shadow-md bg-[#DCE6FF] py-3 px-6 gap-2">
            {/* post header */}
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-[35px] h-[35px] rounded-full bg-black overflow-hidden border-2 border-black">
                        <img src={profile} alt="profile" className="object-cover" />
                    </div>
                    <div className="flex flex-col leading-3">
                        <span className="font-bold text-[14px]">Jose Rizal</span>
                        <span className="text-[12px] text-slate-400">3 hours ago</span>
                    </div>
                </div>
                <div className="text-[12px] hover:cursor-pointer">
                    <SlOptionsVertical />
                </div>
            </div>
            {/* post content */}
            <div className="w-full min-h-[50px] px-1 py-3">
                Hi everyone, this is the first post with image.
                <img src={image2} alt="post image" className="w-full max-h-[500px]" />
            </div>
            {/* post actions */}
            <div className="flex justify-center gap-3">
                <div className="flex gap-2 items-center font-semibold px-4 py-2 rounded-full bg-slate-300">
                    <span className="text-[12px]">10</span>
                    <FaRegHeart className="hover:cursor-pointer text-[16px]" />
                </div>
                <div className="flex gap-2 items-center font-semibold px-4 py-2 rounded-full bg-slate-300">
                    <span className="text-[12px]">5</span>
                    <FaRegComment className="hover:cursor-pointer text-[16px]" />
                </div>
                <div className="flex gap-2 items-center font-semibold px-4 py-2 rounded-full bg-slate-300">
                    <span className="text-[12px]">1</span>
                    <FaRegShareSquare className="hover:cursor-pointer text-[16px]" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Posts