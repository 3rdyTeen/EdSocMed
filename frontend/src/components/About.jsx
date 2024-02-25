import { MdDelete, MdFamilyRestroom } from "react-icons/md";
import { FaUser, FaBirthdayCake,FaLanguage, FaEdit } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";

const About = () => {
  return (
    <div className="flex flex-col gap-4">
        {/* Other Info */}
        <div className="flex flex-col gap-2 w-full rounded-md shadow p-5">
            <h1 className="font-bold">Other Informartion</h1>
            <hr />
            <div className="w-full gap-3 flex justify-between items-center">
            <div className="flex w-1/2 p-3 border-2 rounded gap-5 items-center">
                <FaUser className="text-[28px]" />
                <div className="flex flex-col leading-4">
                    <span className="text-[24px] font-bold">MALE</span>
                    <span className="text-[10px]">GENDER</span>
                </div>
            </div>

            <div className="flex w-1/2 p-3 border-2 rounded gap-5 items-center">
                <FaBirthdayCake className="text-[28px]" />
                <div className="flex flex-col leading-4">
                    <span className="text-[24px] font-bold">OCT 12, 1998</span>
                    <span className="text-[10px]">BIRTHDAY</span>
                </div>
            </div>

            </div>

            <div className="w-full gap-3 flex justify-between items-center">
            <div className="flex w-1/2 p-3 border-2 rounded gap-5 items-center">
                <FaLanguage className="text-[28px]" />
                <div className="flex flex-col leading-4">
                    <span className="text-[24px] font-bold">ENGLISH</span>
                    <span className="text-[10px]">LANGUAGE</span>
                </div>
            </div>

            <div className="flex w-1/2 p-3 border-2 rounded gap-5 items-center">
                <MdFamilyRestroom className="text-[28px]" />
                <div className="flex flex-col leading-4">
                    <span className="text-[24px] font-bold">SINGLE</span>
                    <span className="text-[10px]">RELATIONSHIP STATUS</span>
                </div>
            </div>

            </div>
            <div className="w-full py-1 border-2 rounded flex justify-center gap-3 items-center font-semibold hover:bg-black hover:text-white">
                <FaEdit />
                Update 
            </div>
        </div>
        {/* Education */}
        <div className="flex flex-col gap-2 w-full rounded-md shadow p-5">
            <h1 className="font-bold">Education</h1>
            <hr />
            <div className="w-full p-3 border-2 rounded flex justify-between items-center">
            <div className="flex flex-col text-[12px] leading-4">
                <div className="text-[16px] font-bold">Nation High School</div>
                <div>Northford, Pasig, Manila City</div>
                <div>Y/R 2014-2010</div>
            </div>
                <MdDelete className="text-red-500 text-[20px] hover:cursor-pointer" title="Delete" />
            </div>
            <div className="w-full py-1 border-2 rounded flex justify-center gap-3 items-center font-semibold hover:bg-black hover:text-white">
                <IoIosAddCircle />
                Add Education
            </div>
        </div>
        {/* Work */}
        <div className="flex flex-col gap-2 w-full rounded-md shadow p-5">
            <h1 className="font-bold">Work</h1>
            <hr />
            <div className="w-full p-3 border-2 rounded flex justify-between items-center">
            <div className="flex flex-col text-[12px] leading-4">
                <div className="text-[16px] font-bold">Naic Manufacturing Corp.</div>
                <div>Northford, Pasig, Manila City</div>
                <div>2014-2010</div>
            </div>
                <MdDelete className="text-red-500 text-[20px] hover:cursor-pointer" title="Delete" />
            </div>
            <div className="w-full py-1 border-2 rounded flex justify-center gap-3 items-center font-semibold hover:bg-black hover:text-white">
                <IoIosAddCircle />
                Add Work
            </div>
        </div>
    </div>
  )
}

export default About