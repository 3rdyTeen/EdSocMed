import { Logo } from "../assets"
import { FaBlog, FaTasks, FaStore, FaMusic } from "react-icons/fa";

const MainSidebar = () => {
  return (
    <div className="w-[60px] flex flex-col flex-shrink-0 h-full bg-black pt-[25px] px-[10px] items-center gap-[60px]">
        <img src={Logo} alt="Logo" className="w-full h-auto" />
        <div className="w-full flex flex-col gap-[10px]">
          <div className="w-full rounded-md px-2 py-3 items-center flex justify-center flex-col bg-[#00ADFF] text-white" title="Social Media">
            <FaBlog />
          </div>
          <div className="w-full rounded-md px-2 py-3 items-center flex justify-center flex-col bg-white" title="Task Management">
            <FaTasks />
          </div>
          <div className="w-full rounded-md px-2 py-3 items-center flex justify-center flex-col bg-white" title="Ecommerce">
            <FaStore />
          </div>
          <div className="w-full rounded-md px-2 py-3 items-center flex justify-center flex-col bg-white" title="Music">
            <FaMusic />
          </div>
        </div>
    </div>
  )
}

export default MainSidebar