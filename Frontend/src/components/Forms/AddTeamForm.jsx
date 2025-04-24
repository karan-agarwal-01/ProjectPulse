import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { IoAddCircle } from 'react-icons/io5';
import React, { useState } from 'react';
import { TeamData } from '../Workflow/Admin/Data/Data';

const AddTeamForm = () => {

    const {handleSubmit, register} = useForm();
    const navigate = useNavigate()
    const [showInput, setShowInput] =  useState(false);
    const [input, setInput] = useState('');
    const [team, setTeam] = useState([]);
    const [TotalAssignedProjects, setTotalAssignedProjects] = useState(0);


    const handleClick = () => {
        setTeam([...team, input])
        setShowInput(false);
        setInput('');
    }

    const onSubmitHandler = (data) => {
        TeamData.push({...data, team, TotalAssignedProjects})
        navigate('/manage-projects')
    }

    const onCancel = () => {
        navigate('/manage-projects')
    }

    return (
        <div className="p-4">
            <div className="ubuntu-medium text-[1.6rem] text-center">Add Team Members</div>
            <div className="p-3">
                <div className="bg-[#fafafa] h-auto border border-gray-300 rounded-2xl pb-3">
                    <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className="p-3 flex flex-col gap-2">
                        <label htmlFor="name" className="ubuntu-regular">Team Name</label>
                        <input type="text" className="border h-[2rem] rounded-lg border-[#66686a] pl-2" placeholder="Enter Team Name" id='TeamName' {...register("TeamName")} />    
                    </div>
                    <div className="p-3 flex flex-col gap-2">
                        <label htmlFor="manager" className="ubuntu-regular">Team Manager</label>
                        <input type="text" className="border h-[2rem] rounded-lg border-[#66686a] pl-2" placeholder="Enter Team Manager Name" id='TeamManager' {...register("TeamManager")} />    
                    </div>
                    <div className="p-3 flex flex-col gap-2">
                        <div className='flex gap-2 items-center'>
                            <label htmlFor="manager" className="ubuntu-regular">Add Team Members</label>
                            <IoAddCircle size='1.5rem' color='#66686a' onClick={() => setShowInput(true)} />
                        </div>
                        <div className='flex gap-2 items-center'>
                        {
                            showInput && (
                                <>
                                <input type="text" className="border h-[2rem] rounded-lg border-[#66686a] pl-2" placeholder="Enter Team Member Name" value={input} onChange={(e) => setInput(e.target.value)} />
                                <button onClick={handleClick} className="bg-[#3e11aa] text-sm text-white px-3 py-2 rounded-xl cursor-pointer hover:bg-[darkblue]">Add</button>    
                                </>
                            )
                        }
                        </div>
                        <div>
                            {
                                team.map((data, index) => (
                                    <div className='ubuntu-regular'>{`${index + 1}. ${data}`}</div>
                                ))
                            }   
                        </div>
                    </div>
                    <div className="flex gap-2 pt-2 justify-end mr-5">
                        <button type="submit" className="bg-[#3e11aa] text-sm text-white font-medium px-3 py-2 rounded-xl cursor-pointer hover:bg-[darkblue]">Create</button>  
                        <button type="button" onClick={onCancel} className="bg-[#3e11aa] text-sm text-white font-medium px-3 py-2 rounded-xl cursor-pointer hover:bg-[darkblue]">Cancel</button>  
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default AddTeamForm;
