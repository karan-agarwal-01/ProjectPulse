import './App.css';
import Home from './components/Main/Home';
import Navbar from './components/Navbar/Navbar';
import {Route, Routes, useLocation} from 'react-router-dom';
import Dashboard from './components/Workflow/Admin/Dashboard';
import Project_Management from './components/Workflow/Admin/Project_Management';
import AdminLogin from './components/Auth/Login';

function App() {

  const location = useLocation();

  return (
    <>
     {location.pathname !== '/login' && <Navbar />}
      <Routes>
        <Route path='/' element={<Home render={<Dashboard />} />} />
        <Route path='/manage-projects' element={<Home render={<Project_Management />} />} />
        <Route path='/login' element={<AdminLogin />} />
      </Routes>
    </>
  )
}

export default App;