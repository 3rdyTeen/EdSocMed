import { profile } from "../assets"

const RightSM = () => {
  return (
    <div className='w-[300px] h-full py-2 px-3 gap-6 flex flex-col'>
      
      {/* Suggestion section */}
      <div className='flex flex-col gap-2'>
        <span className='font-bold'>Suggestions</span>
        <div className='w-full flex flex-col gap-2'>
          <div className='flex justify-between w-full bg-black rounded-lg p-3'>
            <div className='flex gap-2 items-center'>
              <div className='w-[35px] h-[35px] rounded-full overflow-hidden'>
                <img src={profile} alt="" className='object-cover' />
              </div>
              <div className="text-white font-bold">Juan Luna</div>
            </div>

            <div className="px-4 bg-white rounded-full text-[12px] font-bold flex justify-center items-center">Follow</div>
          </div>
          <div className='flex justify-between w-full bg-black rounded-lg p-3'>
            <div className='flex gap-2 items-center'>
              <div className='w-[35px] h-[35px] rounded-full overflow-hidden'>
                <img src={profile} alt="" className='object-cover' />
              </div>
              <div className="text-white font-bold">Juan Luna</div>
            </div>

            <div className="px-4 bg-white rounded-full text-[12px] font-bold flex justify-center items-center">Follow</div>
          </div>
          <div className='flex justify-between w-full bg-black rounded-lg p-3'>
            <div className='flex gap-2 items-center'>
              <div className='w-[35px] h-[35px] rounded-full overflow-hidden'>
                <img src={profile} alt="" className='object-cover' />
              </div>
              <div className="text-white font-bold">Juan Luna</div>
            </div>

            <div className="px-4 bg-white rounded-full text-[12px] font-bold flex justify-center items-center">Follow</div>
          </div>
          <div className="text-[12px] text-slate-600 flex justify-end hover:cursor-pointer">See all</div>
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

export default RightSM