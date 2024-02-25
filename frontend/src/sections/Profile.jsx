import { useEffect } from "react";
import { Posts, About } from "../components"
import { useState } from "react"

const Profile = () => {
  const [ currentTab, setCurrentTab ] = useState('post');
  let TabContent = Posts;
  
  if(currentTab == 'about'){
    TabContent = About;
  }

 
  return (
    <div className='flex flex-grow justify-center'>
      <div className='w-[650px] flex flex-col gap-3'>

        {/* cover photo */}
        <div className='w-full h-[400px] bg-slate-300 shadow-sm'>
        </div>

        <ul className='px-12 list-none flex justify-between text-gray-500 cursor-pointer'>
          <li onClick={() => setCurrentTab('post')}
              className={`${currentTab == 'post' ? "border-b-2 border-black font-bold text-black" : ''}`}>
                Post
          </li>
          <li  onClick={() => setCurrentTab('about')}
                className={`${currentTab == 'about' ? "border-b-2 border-black font-bold text-black" : ''}`}>
                About
          </li>
          <li>Friends</li>
          <li>Media</li>
        </ul>

        {/* post section */}
        <div className="w-full flex h-full flex-col px-12 gap-2 overflow-y-scroll no-scrollbar">
          <TabContent />
        </div>
      </div>
    </div>
  )
}

export default Profile