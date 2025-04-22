import { RxDashboard } from "react-icons/rx";
import { GoProjectRoadmap } from "react-icons/go";
import { MdOutlineTaskAlt } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-[#fafafa] w-[16rem] h-[100vh] fixed mt-13">
        <div className="pt-4 flex flex-col h-[91.1vh] justify-between">
            <div className="flex flex-col gap-1">
                <NavLink to='/' className={({isActive}) => `flex items-center gap-1.5 ubuntu-regular cursor-pointer px-10 py-4 ${isActive ? "bg-[#3e11aa] text-white" : "bg-[#fafafa] hover:bg-[#cccccc]"} `}>
                    <RxDashboard size='1.1rem' />
                    <div className="text-[1rem]">Dashboard</div>
                </NavLink>
                <NavLink to='/manage-projects' className={({isActive}) => `flex items-center gap-1.5 ubuntu-regular cursor-pointer px-10 py-4 ${isActive ? "bg-[#3e11aa] text-white" : "bg-[#fafafa] hover:bg-[#cccccc]"} `}>
                    <GoProjectRoadmap size='1.1rem' />
                    <div className="text-[1rem]">Manage Projects</div>
                </NavLink>
                <NavLink to='/manage-tasks' className={({isActive}) => `flex items-center gap-1.5 ubuntu-regular cursor-pointer px-10 py-4 ${isActive ? "bg-[#3e11aa] text-white" : "bg-[#fafafa] hover:bg-[#cccccc]"} `}>
                    <MdOutlineTaskAlt size='1.1rem' />
                    <div className="text-[1rem]">Manage Tasks</div>
                </NavLink>
                <NavLink to='/settings' className={({isActive}) => `flex items-center gap-1.5 ubuntu-regular cursor-pointer px-10 py-4 ${isActive ? "bg-[#3e11aa] text-white" : "bg-[#fafafa] hover:bg-[#cccccc]"} `}>
                    <IoSettingsOutline size='1.1rem' />
                    <div className="text-[1rem]">Settings</div>
                </NavLink>
            </div>
        </div>
    </div>
  );
};

export default Sidebar;
