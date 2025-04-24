import { MdOutlineTask } from "react-icons/md";

const ProjectTaskCard = ({projectTitle, Deadline, Task, TeamManager}) => {

    return (
        <div className="bg-[#fafafa] h-[8rem] w-[30rem] border border-gray-300 rounded-2xl pb-3">
            <div className="p-3 flex items-center justify-between">
                <div className="text-lg ubuntu-regular">{projectTitle}</div>
                <div className="text-sm ubuntu-regular text-red-600 mr-1">Deadline: {Deadline}</div>
            </div>
            <div className="p-3 flex justify-between items-center">
                <div className="flex gap-2.5 items-center">
                    <MdOutlineTask size={'1.5rem'} />
                    <div>
                        <div className="text-sm ubuntu-medium">{Task}</div>
                        <div className="text-xs text-[#66686a] ubuntu-regular">{TeamManager}</div>
                    </div>
                </div>
                <div className="flex gap-1 items-center">
                    <div className="text-[.8rem] py-1.5 bg-[red] rounded-xl px-3 text-white text-center ubuntu-regular cursor-pointer">Cancelled</div>
                    <div className="text-[.8rem] py-1.5 bg-[green] rounded-xl px-3 text-white text-center ubuntu-regular cursor-pointer">Completed</div>
                </div>
            </div>
        </div>
    );
}

export default ProjectTaskCard;