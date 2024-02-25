const RightProfile = () => {
  return (
    <div className='w-[300px] h-full py-2 px-3 gap-6 flex flex-col'>
      
      {/* Suggestion section */}
      <div className='flex flex-col gap-2'>
        <div className="flex justify-between bg-black p-2">
            <span className='font-bold text-white'>About</span>
            <button className="text-[12px] font-semibold text-white flex justify-center items-center py-1 px-3 bg-green-500 rounded-full">Edit Profile</button>
        </div>
        
        <div className='w-full flex flex-col gap-2 px-4'>
          <div className="flex flex-col text-[14px]">
            <span className="font-bold">Bio</span>
            <p className="ml-6">
                This is my bio
            </p>
          </div>

          <div className="flex flex-col text-[14px]">
            <span className="font-bold">Email</span>
            <p className="ml-6">
                email@email.com
            </p>
          </div>

          <div className="flex flex-col text-[14px]">
            <span className="font-bold">Phone</span>
            <p className="ml-6">
                090909090909
            </p>
          </div>

          <div className="flex flex-col text-[14px]">
            <span className="font-bold">Address</span>
            <p className="ml-6">
                jan lang
            </p>
          </div>

        </div>
      </div>

      {/* Media section */}
      <div className='flex flex-col gap-1 h-full'>
        <span className='font-bold'>Media</span>
        <div className='w-full h-full flex justify-center items-center rounded-md bg-slate-300'>
          No Media Available
        </div>
      </div>
    </div>
  )
}

export default RightProfile