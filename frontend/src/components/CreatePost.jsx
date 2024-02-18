import { IoClose } from "react-icons/io5";
import { MdPermMedia } from "react-icons/md";
import { profile } from "../assets";
import { useState } from "react";

const CreatePost = ( { open, onClose }) => {

  return (
    <div className={`flex justify-center items-center w-full backdrop-blur bg-black/50 h-screen absolute inset-0 left-0 z-10 transition-colors ${open ? "visible" : "invisible"}`}>
        <div className="bg-white w-[500px] max-h-[500px] p-5 rounded-md shadow-md flex flex-col gap-3">
            {/* Modal Header */}
            <div className="flex justify-between items-center">
                <div className="font-bold">Create Post</div>
                <div className="flex gap-2">
                    <span className="flex justify-center items-center px-4 rounded-full bg-green-700 text-white font-semibold hover:cursor-pointer shadow-sm">Post</span>
                    <span onClick={onClose} className="flex justify-center items-center p-2 rounded-full bg-red-700 text-white font-semibold hover:cursor-pointer shadow-sm" title="Close">
                        <IoClose />
                    </span>
                </div>
            </div> 
            <hr></hr>
            {/* Modal Body */}
            <div className="flex flex-col gap-2 h-full justify-between">
                {/* Head */}
                <div className="flex justify-between"> 
                    <div className="flex gap-3 items-center">
                        <div className="h-[40px] w-[40px] rounded-full overflow-hidden shadow">
                            <img src={profile} alt="profile" className="object-cover" />
                        </div>
                        <span className="font-semibold">Juan Dela Cruz</span>
                    </div>
                    <select name="post_audience" id="post_audience" className="py-1 px-2 h-fit rounded-lg text-[12px] font-semibold">
                        <option value="public">Public</option>
                        <option value="friends">Friends</option>
                        <option value="only_me">Only Me</option>
                    </select>
                </div>
                <hr></hr>

                {/* Content */}
                <div className="max-h-[300px] w-full overflow-y-scroll no-scrollbar p-2">
                    <span className="spanTextbox block text-[16px] min-h-[50px] max-h-full w-full break-all focus:outline-none" contentEditable role="textbox"></span>
                    {/* <img src={} alt="post_image" className="w-full h-auto object-cover" /> */}
                </div>
                {/* Attach Media */}
                <hr></hr>
                <div className="flex justify-between items-center text-[12px] font-semibold">
                    <span>Attach a Photo or Video</span>
                    <span className=" flex gap-2 px-4 py-1 rounded-full items-center bg-slate-200">
                        <MdPermMedia />
                        Upload
                    </span>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default CreatePost