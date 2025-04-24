import { TbEdit } from "react-icons/tb";
import { ProjectData } from "./Data/Data";
import { MdDeleteOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const ShowProjects = () => {

    const navigate = useNavigate();

    return (
      <div className="p-4">
        <div className="ubuntu-medium text-[1.6rem] text-center">Show Projects</div>
        <div className="p-3">
          <div className="bg-[#fafafa] h-auto border border-gray-300 rounded-2xl pb-3">
            <div className="ubuntu-regular text-sm flex gap-1 justify-between w-[100%] pt-4 pl-5">
                <div className="w-[10%]">Projects</div>
                <div className="w-[20%]">Projects Name</div>
                <div className="w-[15%]">Manager Name</div>
                <div className="w-[15%]">Team Name</div>
                <div className="w-[15%]">Budget</div>
                <div className="w-[10%] px-5">Status</div>
                <div className="w-[15%] px-8">Actions</div>
            </div>
            <hr className="mt-2 bg-[#3e11aa] h-[1.5px]" />
            {
                ProjectData.map((data, index) => (
                    <div key={index} className="ubuntu-regular text-[.8rem] flex gap-1 justify-between items-center w-[100%] pt-4 pl-5">
                        <div className="w-[10%]">
                            <img src={data.Project_Img} className="h-[4rem] w-[4rem] object-cover rounded-2xl" />
                        </div>
                        <div className="w-[20%] text-[#66686a] hover:text-[#3e11aa] cursor-pointer" onClick={() => navigate('/manage-tasks', {state: data.ProjectTitle})}>{data.ProjectTitle}</div>
                        <div className="w-[15%] text-[#66686a]">{data.ProjectManager}</div>
                        <div className="w-[15%] text-[#66686a]">{data.TeamName}</div>
                        <div className="w-[15%] text-[#66686a]">{`INR ${data.Budget}`}</div>
                        <div className={`w-[10%] py-1 px-3 rounded-2xl text-center text-[#fafafa] ${data.Status === 'Completed' && 'bg-[green]'} ${data.Status === 'Ongoing' && 'bg-[#fcbf49]'} ${data.Status === 'Pending' && 'bg-[red]'}`}>{data.Status}</div>
                        <div className="w-[15%] px-8 flex items-center gap-2">
                            <TbEdit size={'1.4rem'} className="cursor-pointer" color="#3e99ee" />
                            <MdDeleteOutline size={'1.4rem'} className="cursor-pointer" color="red" />
                        </div>
                    </div>  
                ))
            }
            <div  className="ubuntu-regular text-sm ubuntu-regular text-[#3e11aa] cursor-pointer hover:text-[#66686a] pl-6 pt-4 w-[20%]">
            <Link to='/manage-projects/add-projects'>Add Project</Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ShowProjects;
  