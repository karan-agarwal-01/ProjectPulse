import health from '../../../assets/images/health.jpeg'
import blood from '../../../assets/images/blood.jpeg'
import bank from '../../../assets/images/bank.jpeg'
import book from '../../../assets/images/book.jpeg'
import comic from '../../../assets/images/comic.jpeg'
import notes from '../../../assets/images/notes.jpeg'
import shopping from '../../../assets/images/shopping.jpeg'
import project from '../../../assets/images/project.jpeg'

import ProjectCreateCard from "../../Cards/ProjectCreateCard";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const Project_Management = () => {

  const ProjectData = [
    {
      ProjectTitle: "Health Engine",
      Project_Description: "A mobile application to monitor daily health stats and habits.",
      StartDate: "2024-12-01",
      EndDate: "2025-03-15",
      ProjectManager: "Alice Johnson",
      Project_Img: health,
    },
    {
      ProjectTitle: "Blood Donate Tracker",
      Project_Description: "A dashboard to manage Blood banking and their workflow.",
      StartDate: "2025-01-10",
      EndDate: "2025-06-01",
      ProjectManager: "John Smith",
      Project_Img: blood,
    },
    {
      ProjectTitle: "comicKey",
      Project_Description: "A responsive platform for read comics.",
      StartDate: "2024-11-20",
      EndDate: "2025-04-30",
      ProjectManager: "Priya Sharma",
      Project_Img: comic,
    },
    {
      ProjectTitle: "Banking System",
      Project_Description: "A secure system to handle customer accounts, loans, and transactions.",
      StartDate: "2025-02-05",
      EndDate: "2025-08-10",
      ProjectManager: "David Lee",
      Project_Img: bank,
    },
    {
      ProjectTitle: "E-Shop",
      Project_Description: "A web portal for E-commerce services.",
      StartDate: "2024-10-01",
      EndDate: "2025-01-31",
      ProjectManager: "Sara Ali",
      Project_Img: shopping,
    },
    {
      ProjectTitle: "Book Management Tool",
      Project_Description: "Track Books orders, sales, and deliveries in real-time.",
      StartDate: "2024-12-15",
      EndDate: "2025-05-20",
      ProjectManager: "Mike Brown",
      Project_Img: book,
    },
    {
      ProjectTitle: "NoteMaster",
      Project_Description: "An app to create notes.",
      StartDate: "2025-01-05",
      EndDate: "2025-07-15",
      ProjectManager: "Emily Davis",
      Project_Img: notes,
    }
  ]; 

  const TeamData = [
    {
      TeamName: "Team Alice",
      TeamManager: "Alice Johnson",
      TotalAssignedProjects: 5,
    },
    {
      TeamName: "Team John",
      TeamManager: "John Smith",
      TotalAssignedProjects: 4,
    },
    {
      TeamName: "Team Priya",
      TeamManager: "Priya Sharma",
      TotalAssignedProjects: 3,
    },
    {
      TeamName: "Team David",
      TeamManager: "David Lee",
      TotalAssignedProjects: 6,
    },
    {
      TeamName: "Team Sara",
      TeamManager: "Sara Ali",
      TotalAssignedProjects: 2,
    },
    {
      TeamName: "Team Emily",
      TeamManager: "Emily Davis",
      TotalAssignedProjects: 4,
    },
    {
      TeamName: "Team Mike",
      TeamManager: "Mike Brown",
      TotalAssignedProjects: 3,
    }
  ];

  const TaskData = [
    { name: 'Completed', value: 100 },
    { name: 'In Progress', value: 72 },
    { name: 'Pending', value: 28 },
  ]

  const COLORS = ['#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="p-4">
      <div className="ubuntu-medium text-[1.6rem] text-center">All Projects</div>
      <div className="p-3">
          <div className="bg-[#fafafa] h-auto border border-gray-300 rounded-2xl pb-3">
            <div className='flex justify-between p-5'>
              <div className="ubuntu-regular text-lg">Projects</div>
              <div className="ubuntu-regular text-sm ubuntu-regular text-[#3e11aa] cursor-pointer hover:text-[#66686a] mr-3">Show More</div>
            </div>
              <div className="grid grid-cols-5 gap-2">
                {
                  ProjectData.map((data, index) => (
                    <ProjectCreateCard key={index} project_Name={data.ProjectTitle} project_img={data.Project_Img} />
                  ))
                }
                <div>
                    <ProjectCreateCard project_Name="Add New Project" project_img={project} />
                </div>
              </div>
          </div>
      </div>
      <div className='flex w-[100%]'>
        <div className="p-3 w-[50%]">
          <div className="bg-[#fafafa] h-[19rem] border border-gray-300 rounded-2xl pb-3">
            <div className='flex justify-between p-5'>
              <div className="ubuntu-regular text-md">Teams</div>
              <div className="ubuntu-regular text-sm ubuntu-regular text-[#3e11aa] cursor-pointer hover:text-[#66686a] mr-3">Show More</div>
            </div>
            <div className="ubuntu-regular text-sm flex gap-1 justify-between w-[100%] pb-3 pl-5">
                <div className="w-[30%]">Team Name</div>
                <div className="w-[30%]">Team Manager</div>
                <div className="w-[40%]">Total Assigned projects</div>
            </div>
            {
              TeamData.map((data, index) => (
                <div className="ubuntu-regular text-xs flex gap-1 justify-between w-[100%] pb-3 pl-5" key={index}>
                    <div className="w-[30%] text-[#66686a]">{data.TeamName}</div>
                    <div className="w-[30%] text-[#66686a]">{data.TeamManager}</div>
                    <div className="w-[40%] px-16 text-[#66686a]">{data.TotalAssignedProjects}</div>
                </div>
              ))
            }
          </div>
      </div>
      <div className="p-3 w-[50%]">
          <div className="bg-[#fafafa] h-[19rem] border border-gray-300 rounded-2xl pb-3">
            <div className="ubuntu-regular text-md p-5">Task Overview</div>
            <ResponsiveContainer width='100%' height={230}>
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
