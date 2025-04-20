import { RxDashboard } from "react-icons/rx";
import { GoProjectRoadmap } from "react-icons/go";
import { MdOutlineTaskAlt } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="bg-[#fafafa] w-[16rem] h-[100vh]">
        <div className="pt-4 flex flex-col gap-1">
            <div className="flex items-center gap-1.5 ubuntu-regular hover:bg-[#3e11aa] hover:text-white cursor-pointer px-10 py-4">
                <RxDashboard size='1.1rem' />
                <div className="text-[1rem]">Dashboard</div>
            </div>
            <div className="flex items-center gap-1.5 ubuntu-regular hover:bg-[#3e11aa] hover:text-white cursor-pointer px-10 py-4">
                <GoProjectRoadmap size='1.1rem' />
                <div className="text-[1rem]">Manage Projects</div>
            </div>
            <div className="flex items-center gap-1.5 ubuntu-regular hover:bg-[#3e11aa] hover:text-white cursor-pointer px-10 py-4">
                <MdOutlineTaskAlt size='1.1rem' />
                <div className="text-[1rem]">Manage Tasks</div>
            </div>
            <div className="flex items-center gap-1.5 ubuntu-regular hover:bg-[#3e11aa] hover:text-white cursor-pointer px-10 py-4">
                <IoSettingsOutline size='1.1rem' />
                <div className="text-[1rem]">Settings</div>
            </div>
        </div>
    </div>
  );
};

export default Sidebar;
