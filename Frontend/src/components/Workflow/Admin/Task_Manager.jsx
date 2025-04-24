import { useState } from "react";
import { ProjectData } from "./Data/Data";
import ProjectTaskCard from "../../Cards/ProjectTaskCard";
import { GoPlusCircle } from "react-icons/go";
import Modal from "../../Modal/Modal";
import { useLocation } from "react-router-dom";

const Task_Manager = () => {

  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const state = location.state;
  console.log(state)

  return (
    <>
    <div className="p-4">
      <div className="ubuntu-medium text-[1.6rem] text-center">Project Tasks</div>
        {
          (state === null ? ProjectData : ProjectData.filter((data) => data.ProjectTitle === state)).map((data, index) => (
            <div key={index} className="mt-2 grid grid-cols-2">
              {
                data.Tasks.map((task, index) => (
                  <div key={index} className="p-2">
                    <ProjectTaskCard projectTitle={data.ProjectTitle} Deadline={data.EndDate} Task={task} TeamManager={`Task no.${index+1} - Assign to ${data.ProjectManager}`} />
                  </div>
                ))
              }
              <div onClick={() => setIsOpen(true)} className="bg-[#fafafa] h-[8rem] w-[30rem] ml-2 border border-gray-300 rounded-2xl mt-2 flex items-center justify-center hover:bg-slate-100 cursor-pointer">
                <div className="text-xl ubuntu-medium flex items-center gap-2">Add New Task <GoPlusCircle /></div>
              </div>
            </div>
          ))
        }
    </div>
    <Modal open={isOpen} onclose={() =>setIsOpen(false)}>
      <div className="h-[18rem] w-[35rem] bg-white rounded-3xl">
        <form className="pt-8 px-5">
          <div className="p-3 flex flex-col gap-2">
            <label htmlFor="TaskName" className="ubuntu-regular">Task Name</label>
            <input type="text" className="border h-[2rem] rounded-lg border-[#66686a] pl-2" placeholder="Enter Task Name" id='TaskName' />    
          </div>
          <div className="p-3 flex flex-col gap-2">
            <label htmlFor="TaskAssign" className="ubuntu-regular">To Assign</label>
            <input type="text" className="border h-[2rem] rounded-lg border-[#66686a] pl-2" placeholder="Enter Task Assign To" id='TaskAssign' />    
          </div>
          <div className="p-3 flex flex-col gap-2 w-[30%]">
            <button type="submit" className="bg-[#3e11aa] text-sm text-white font-medium px-1 py-2.5 rounded-xl cursor-pointer hover:bg-[darkblue]">Add Task</button>  
          </div>
        </form>
      </div>
    </Modal>
    </>
  );
};

export default Task_Manager;
