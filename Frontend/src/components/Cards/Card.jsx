const Card = ({ Project_Types, Total_Projects, Project_Icon }) => {
  return (
    <div className="bg-[#fafafa] w-[20rem] h-[9.5rem] border border-gray-300 rounded-2xl">
        <div className="flex items-center justify-between">
            <div className="p-6 flex gap-2 flex-col">
                <div className="ubuntu-regular text-lg">{Project_Types}</div>
                <div className="ubuntu-medium text-2xl">{Total_Projects}</div>
            </div>
            <div className="mr-8">
                {Project_Icon}
            </div>
        </div>
        <div className="pl-6 text-sm ubuntu-regular text-[#3e11aa] cursor-pointer hover:text-[#66686a] w-[30%]">
          <div>Show more</div>
        </div>
    </div>
  )
}

export default Card;