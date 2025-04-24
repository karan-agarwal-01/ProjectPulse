import project from '../../../assets/images/project.jpeg'
import ProjectCreateCard from "../../Cards/ProjectCreateCard";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { ProjectData, TaskData, TeamData } from './Data/Data'
import { Link, useNavigate } from 'react-router-dom';

const Project_Management = () => {

  const navigate = useNavigate();

  const COLORS = ['#00C49F', '#FFBB28', '#FF8042'];

  const handleClick = () => {
    navigate('/manage-projects/add-projects')
  }

  return (
    <div className="p-4">
      <div className="ubuntu-medium text-[1.6rem] text-center">All Projects</div>
      <div className="p-3">
          <div className="bg-[#fafafa] h-auto border border-gray-300 rounded-2xl pb-3">
            <div className='flex justify-between p-5'>
              <div className="ubuntu-regular text-lg">Projects</div>
              <Link to='/manage-projects/show-projects' className="ubuntu-regular text-sm ubuntu-regular text-[#3e11aa] cursor-pointer hover:text-[#66686a] mr-3">Show More</Link>
            </div>
              <div className="grid grid-cols-5 gap-2">
                {
                  ProjectData.map((data, index) => (
                    <ProjectCreateCard key={index} project_Name={data.ProjectTitle} project_img={data.Project_Img} />
                  ))
                }
                <button onClick={handleClick}>
                    <ProjectCreateCard project_Name="Add New Project" project_img={project} />
                </button>
              </div>
          </div>
      </div>
      <div className='flex w-[100%]'>
        <div className="p-3 w-[50%]">
          <div className="bg-[#fafafa] h-[20.5rem] border border-gray-300 rounded-2xl pb-3">
            <div className='flex justify-between p-5'>
              <div className="ubuntu-regular text-md">Teams</div>
              <Link to='/manage-projects/show-team' className="ubuntu-regular text-sm ubuntu-regular text-[#3e11aa] cursor-pointer hover:text-[#66686a] mr-3">Show More</Link>
            </div>
            <div className="ubuntu-regular text-sm flex gap-1 justify-between w-[100%] pb-3 pl-5">
                <div className="w-[30%]">Team Name</div>
                <div className="w-[30%]">Team Manager</div>
                <div className="w-[40%]">Total Assigned projects</div>
            </div>
            {
              TeamData.map((data, index) => (
                <div className="ubuntu-regular text-xs flex gap-1 justify-between w-[100%] pb-3 pl-5" key={index}>
                    <div className="w-[30%] hover:text-[#3e11aa] cursor-pointer">{data.TeamName}</div>
                    <div className="w-[30%] text-[#66686a]">{data.TeamManager}</div>
                    <div className="w-[40%] px-16 text-[#66686a]">{data.TotalAssignedProjects}</div>
                </div>
              ))
            }
            <Link to='/manage-projects/add-team' className="ubuntu-regular text-sm ubuntu-regular text-[#3e11aa] cursor-pointer hover:text-[#66686a] pl-5 pt-1 w-[20%]">Add team</Link>
          </div>
      </div>
      <div className="p-3 w-[50%]">
          <div className="bg-[#fafafa] h-[20.5rem] border border-gray-300 rounded-2xl pb-3">
            <div className="ubuntu-regular text-md p-5">Task Overview</div>
            <ResponsiveContainer width='100%' height={250}>
              <PieChart>
                <Pie
                  data={TaskData}
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  dataKey="value"
                  label
                >
                  {TaskData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
      </div>
     </div>
    </div>
    </div>
  )
}

export default Project_Management;
