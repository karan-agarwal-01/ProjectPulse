import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import { SiTask } from "react-icons/si";
import { LuLaptopMinimalCheck } from "react-icons/lu";
import { MdOutlinePendingActions } from "react-icons/md";
import Card from "../../Cards/Card";

const Dashboard = () => {

    const ProjectCard = [
        {
            heading: 'Completed Projects',
            count: 20,
            icon: <LuLaptopMinimalCheck size={'3.5rem'} color="green" />
        },
        {
            heading: 'Ongoing Projects',
            count: 10,
            icon: <SiTask size={'3.5rem'} color="#fcbf49" />
        },
        {
            heading: 'Pending Projects',
            count: 5,
            icon: <MdOutlinePendingActions size={'3.5rem'} color="red" />
        }
    ]

    const ProjectData = [
        {
            ProjectName: "Health Engine",
            TeamManager: "John Doe",
            StartingDateTime: "22-06-2024 - 12:03 PM",
            Deadline: "31-08-2024",
            Budget: 50000,
            Status: "Delivered",
        },
        {
            ProjectName: "Gojo Bank",
            TeamManager: "Karan Agarwal",
            StartingDateTime: "12-08-2024 - 01:55 PM",
            Deadline: "31-12-2024",
            Budget: 80000,
            Status: "Ongoing",
        },
        {
            ProjectName: "Note Taking App",
            TeamManager: "krishna",
            StartingDateTime: "01-02-2025 - 05:20 PM",
            Deadline: "20-02-2025",
            Budget: 10000,
            Status: "Pending",
        }
    ]

    const TeamActivity = [
        {
            TeamName: "Team John",
            AssignedTasks: 20,
            Completed: 10,
            InProgress: 5,
            Pending: 5,
        },
        {
            TeamName: "Team Sarah",
            AssignedTasks: 18,
            Completed: 9,
            InProgress: 4,
            Pending: 5,
        },
        {
            TeamName: "Team Alpha",
            AssignedTasks: 25,
            Completed: 15,
            InProgress: 8,
            Pending: 2,
        },
        {
            TeamName: "Team Karan",
            AssignedTasks: 10,
            Completed: 8,
            InProgress: 1,
            Pending: 1,
        },
    ]

    return (
        <>
        <div className="p-4">
            <div className="ubuntu-medium text-[1.6rem] text-center">Dashboard</div>
        </div>
        <div className="p-3 flex gap-4">
            {
                ProjectCard.map((card, index) => (
                    <Card key={index} Project_Types={card.heading} Total_Projects={card.count} Project_Icon={card.icon} />
                ))
            }
        </div>
        <div className="p-3">
            <div className="bg-[#fafafa] h-auto border border-gray-300 rounded-2xl pb-3">
                <div className="flex justify-between p-5">
                    <div className="ubuntu-regular text-lg">Project Overview</div>
                    <div className="ubuntu-regular text-sm border-[1px] border-[#66686a] text-[#66686a] py-0.5 px-3 rounded-3xl mr-5">filter</div>
                </div>
                <div className="ubuntu-regular text-sm flex gap-1 justify-between px-5 w-[100%] pb-3">
                    <div className="w-[20%]">Project Name</div>
                    <div className="w-[15%]">Team Manager</div>
                    <div className="w-[20%]">Starting Date & Time</div>
                    <div className="w-[15%]">Deadline</div>
                    <div className="w-[10%]">Budget</div>
                    <div className="w-[10%] px-5">Status</div>
                </div>
                {
                ProjectData.map((data, index) => (
                    <div key={index} className="ubuntu-regular text-[.8rem] flex gap-1 justify-between items-center px-5 w-[100%] pb-1">
                        <div className="w-[20%] text-[#66686a] hover:text-[#3e11aa]">{data.ProjectName}</div>
                        <div className="w-[15%] text-[#66686a]">{data.TeamManager}</div>
                        <div className="w-[20%] text-[#66686a]">{data.StartingDateTime}</div>
                        <div className="w-[15%] text-[#66686a]">{data.Deadline}</div>
                        <div className="w-[10%] text-[#66686a]">{`INR ${data.Budget}`}</div>
                        <div className={`w-[10%] text-[#fafafa] py-1.5 px-5 rounded-full ${data.Status === 'Delivered' && 'bg-[green]'} ${data.Status === 'Ongoing' && 'bg-[#fcbf49]'} ${data.Status === 'Pending' && 'bg-[red]'}`}>{data.Status}</div>
                    </div>
                ))}
                <div className="pl-5 text-[.8rem] ubuntu-regular text-[#3e11aa] cursor-pointer hover:text-[#66686a] py-2 w-[9%]">Show more</div>
            </div>
        </div>
        <div className="p-3">
            <div className="bg-[#fafafa] h-auto border border-gray-300 rounded-2xl pb-3">
                <div className="ubuntu-regular text-lg p-5">Team Activity</div>
                <div>
                    <div className="ubuntu-regular text-sm flex gap-1 justify-between px-9 w-[100%] pb-3">
                        <div className="w-[20%]">Team Name</div>
                        <div className="w-[20%]">Assigned Tasks</div>
                        <div className="w-[20%]">Completed</div>
                        <div className="w-[20%]">In Progress</div>
                        <div className="w-[20%]">Pending</div>
                    </div>
                    {
                        TeamActivity.map((data, index) => (
                        <div key={index} className="ubuntu-regular text-[.8rem] flex gap-1 justify-between px-10 w-[100%] pb-3">
                            <div className="w-[20%] text-[#66686a]">{data.TeamName}</div>
                            <div className="w-[20%] text-[#66686a] px-5">{data.AssignedTasks}</div>
                            <div className="w-[20%] text-[#66686a] px-5">{data.Completed}</div>
                            <div className="w-[20%] text-[#66686a] px-5">{data.InProgress}</div>
                            <div className="w-[20%] text-[#66686a] px-5">{data.Pending}</div>
                        </div> 
                        ))
                    }
                </div>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart
                    data={TeamActivity}
                    margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="TeamName" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Completed" stroke="#4ade80" strokeWidth={2} />
                    <Line type="monotone" dataKey="InProgress" stroke="#facc15" strokeWidth={2} />
                    <Line type="monotone" dataKey="Pending" stroke="#f87171" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
        </>
    )
};

export default Dashboard;