import { bg_com } from "../assets"
import { MdCreate } from "react-icons/md";
import { Posts, CreatePost } from "../components";
import { useState } from "react";

const Newsfeed = () => {
    const [ ShowCreatePost, setShowCreatePost] =  useState(false);

  return (
    <div className='flex flex-grow justify-center'>
        <div className='w-[650px] flex flex-col gap-2'>

            {/* create a post section */}
            <div className='flex w-full h-[150px] rounded-lg shadow-lg m-2 overflow-hidden'>
                <img src={bg_com} alt="img" className="w-[300px] h-auto object-cover"/>
                <div className="h-full flex items-center gap-10">
                    <span>Share a photo or write something.</span>
                    <div onClick={() => setShowCreatePost(true)} className="p-3 rounded-full border border-gray shadow-md hover:cursor-pointer">
                        <MdCreate />
                    </div>
                </div>
            </div>

            {/* post selection section */}
            <div className="w-full flex flex-col px-12 gap-2 overflow-y-scroll no-scrollbar">
                <div className="w-full flex justify-between">
                    <div className="font-bold">Posts</div>
                    <div className="flex gap-4">
                        <span className="text-slate-300">Friends</span>
                        <span className="text-black font-semibold">All</span>
                        <span className="text-slate-300">Groups</span>
                    </div>
                </div>

                {/* post section */}
                <Posts />
            </div>

            
            <CreatePost open={ShowCreatePost} onClose={() => setShowCreatePost(false)} />
            
        </div>
    </div>
  )
}

export default Newsfeed