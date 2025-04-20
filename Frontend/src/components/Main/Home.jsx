import Sidebar from "../Sidebar/Sidebar";
import Dashboard from "../Workflow/Admin/Dashboard";

const Home = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="h-screen w-[80%]">
                <Dashboard />
            </div>
        </div>
    );
};

export default Home;