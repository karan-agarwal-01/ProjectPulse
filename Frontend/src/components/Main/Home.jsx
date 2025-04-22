import Sidebar from "../Sidebar/Sidebar";
import Dashboard from "../Workflow/Admin/Dashboard";
import Project_Management from "../Workflow/Admin/Project_Management";

const Home = ({ render }) => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="h-screen w-[80%] relative ml-[20%] mt-14">
                {render}
            </div>
        </div>
    );
};

export default Home;