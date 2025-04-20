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
            icon: <SiTask size={'3.5rem'} color="#f4993e" />
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
                    <div className="ubuntu-regular text-md">Project Overview</div>
                    <div className="ubuntu-regular text-sm border-[1px] border-[#66686a] text-[#66686a] py-0.5 px-4 rounded-2xl">filter</div>
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
                        <div className={`w-[10%] text-[#fafafa] py-1.5 px-5 rounded-full ${data.Status === 'Delivered' && 'bg-[green]'} ${data.Status === 'Ongoing' && 'bg-[#f4993e]'} ${data.Status === 'Pending' && 'bg-[red]'}`}>{data.Status}</div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
};

export default Dashboard;