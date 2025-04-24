import { Link } from "react-router-dom";

const Card = ({ Project_Types, Total_Projects, Project_Icon }) => {
  return (
    <div className="bg-[#fafafa] w-full h-[10.5rem] border border-gray-300 rounded-2xl">
        <div className="flex items-center justify-between">
            <div className="p-6 flex gap-2 flex-col">
                <div className="ubuntu-regular text-lg">{Project_Types}</div>
                <div className="ubuntu-medium text-2xl">{Total_Projects}</div>
            </div>
            <div className="mr-8">
                {Project_Icon}
            </div>
        </div>
        <div className="pl-6 pt-4 text-sm ubuntu-regular text-[#3e11aa] cursor-pointer hover:text-[#66686a] w-[40%]">
          <Link to='/manage-projects'>Show more</Link>
        </div>
    </div>
  )
}

export default Card;