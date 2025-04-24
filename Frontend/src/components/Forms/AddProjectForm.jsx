import {useForm} from 'react-hook-form';
import { ProjectData } from '../Workflow/Admin/Data/Data';
import { useNavigate } from 'react-router-dom';

const AddProjectForm = () => {

    const {handleSubmit, register} = useForm();
    const navigate = useNavigate()

    const onSubmitHandler = (data) => {
        ProjectData.push({...data})
        navigate('/manage-projects')
    }

    const onCancel = () => {
        navigate('/manage-projects')
    }

    return (
        <div className="p-4">
            <div className="ubuntu-medium text-[1.6rem] text-center">Add Projects</div>
            <div className="p-3">
                <div className="bg-[#fafafa] h-auto border border-gray-300 rounded-2xl pb-3">
                    <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className="p-3 flex flex-col gap-2">
                        <label htmlFor="title" className="ubuntu-regular">Project Title</label>
                        <input type="text" className="border h-[2rem] rounded-lg border-[#66686a] pl-2" placeholder="Enter Project Title" id='ProjectTitle' {...register("ProjectTitle")} />    
                    </div>
                    <div className="flex w-[100%]">
                        <div className="p-3 flex flex-col gap-2 w-[50%]">
                            <label htmlFor="start" className="ubuntu-regular">Start Date</label>
                            <input type="date" className="border h-[2rem] rounded-lg border-[#66686a] pl-2" placeholder="Enter Project Start Date" id='StartDate' {...register("StartDate")} />    
                        </div>
                        <div className="p-3 flex flex-col gap-2 w-[50%]">
                            <label htmlFor="end" className="ubuntu-regular">End Date</label>
                            <input type="date" className="border h-[2rem] rounded-lg border-[#66686a] pl-2" placeholder="Enter Project End Date" id='EndDate' {...register("EndDate")} />    
                        </div>
                    </div>
                    <div className="p-3 flex flex-col gap-2">
                        <label htmlFor="description" className="ubuntu-regular">Project Description</label>
                        <textarea rows="4" className="border rounded-lg border-[#66686a] pl-2 pt-2" placeholder="Enter Project Description" id='Project_Description' {...register("Project_Description")}></textarea>    
                    </div>
                    <div className='flex w-[100%]'>
                        <div className="p-3 flex flex-col gap-2 w-[50%]">
                            <label htmlFor="manager" className="ubuntu-regular">Project Manager</label>
                            <select className="border h-[2rem] rounded-lg border-[#66686a] pl-2" defaultValue={'Select Manager'} id='ProjectManager' {...register("ProjectManager")}>
                                <option value='Select Manager' disabled>Select Manager</option>    
                                <option value='John Doe'>John Doe</option>    
                                <option value='Priya Sharma'>Priya Sharma</option>    
                                <option value='Alex Johnson'>Alex Johnson</option>    
                                <option value='Karan Agarwal'>Karan Agarwal</option>    
                            </select>    
                        </div>
                        <div className="p-3 flex flex-col gap-2 w-[50%]">
                            <label htmlFor="team" className="ubuntu-regular">Project Manager</label>
                            <select className="border h-[2rem] rounded-lg border-[#66686a] pl-2" defaultValue={'Team Name'} id='TeamName' {...register("TeamName")}>
                                <option value='Select Team' disabled>Select Team</option>    
                                <option value='Team John'>Team John</option>    
                                <option value='Team Priya'>Team Priya</option>    
                                <option value='Team Alex'>Team Alex</option>    
                                <option value='Team Karan'>Team Karan</option>    
                            </select>    
                        </div>
                    </div>
                    <div className="p-3 flex flex-col gap-2">
                        <label htmlFor="budget" className="ubuntu-regular">Project Budget</label>
                        <input type="text" className="border h-[2rem] rounded-lg border-[#66686a] pl-2" placeholder="Enter the Budget" id='Budget' {...register("Budget")} />    
                    </div>
                    <div className="p-3 flex flex-col gap-2">
                        <label htmlFor="img" className="ubuntu-regular">Project Image</label>
                        <input type="text" className="border h-[2rem] rounded-lg border-[#66686a] pl-2" placeholder="Enter the Path of the Image" id='Project_Img' {...register("Project_Img")} />    
                    </div>
                    <div className="p-3 flex flex-col gap-2 w-[50%]">
                            <label htmlFor="status" className="ubuntu-regular">Project Status</label>
                            <select className="border h-[2rem] rounded-lg border-[#66686a] pl-2" defaultValue={'Select Status'} id='Status' {...register("Status")}>
                                <option value='Select Status' disabled>Select Status</option>    
                                <option value='Completed'>Completed</option>    
                                <option value='Pending'>Pending</option>    
                                <option value='Ongoing'>Ongoing</option>    
                            </select>    
                        </div>
                    <div className="flex gap-2 pt-2 justify-end mr-5">
                        <button type="submit" className="bg-[#3e11aa] text-sm text-white font-medium px-3 py-2 rounded-xl cursor-pointer hover:bg-[darkblue]">Create</button>  
                        <button type="button" onClick={onCancel} className="bg-[#3e11aa] text-sm font-medium text-white px-3 py-2 rounded-xl cursor-pointer hover:bg-[darkblue]">Cancel</button>  
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddProjectForm;