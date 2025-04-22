const ProjectCreateCard = ({ project_Name, project_img }) => {
    return (
      <>
      <div className='flex flex-col items-center gap-1.5 cursor-pointer'>
        <div className="bg-[#fafafa] w-[9rem] h-[9rem] border border-gray-300 rounded-2xl">
            <img src={project_img} className='h-[9rem] w-[9rem] object-cover rounded-2xl p-1' />
        </div>
        <div>
            <div className='ubuntu-regular text-sm'>{project_Name}</div>
        </div>
      </div>
      </>  
    )
  }
  
  export default ProjectCreateCard;