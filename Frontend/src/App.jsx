import './App.css';
import Home from './components/Main/Home';
import Navbar from './components/Navbar/Navbar';
import {Route, Routes, useLocation} from 'react-router-dom';
import Dashboard from './components/Workflow/Admin/Dashboard';
import Project_Management from './components/Workflow/Admin/Project_Management';
import AdminLogin from './components/Auth/Login';
import AddProjectForm from './components/Forms/AddProjectForm';
import AddTeamForm from './components/Forms/AddTeamForm';
import Task_Manager from './components/Workflow/Admin/Task_Manager';
import ShowProjects from './components/Workflow/Admin/ShowProjects';

function App() {

  const location = useLocation();

  return (
    <>
     {location.pathname !== '/login' && <Navbar />}
      <Routes>
        <Route path='/' element={<Home render={<Dashboard />} />} />
        <Route path='/manage-projects' element={<Home render={<Project_Management />} />} />
        <Route path='/manage-projects/add-projects' element={<Home render={<AddProjectForm />} />} />
        <Route path='/manage-projects/add-team' element={<Home render={<AddTeamForm />} />} />
        <Route path='/manage-projects/show-projects' element={<Home render={<ShowProjects />} />} />
        <Route path='/manage-tasks' element={<Home render={<Task_Manager />} />} />
        <Route path='/login' element={<AdminLogin />} />
      </Routes>
    </>
  )
}

export default App;