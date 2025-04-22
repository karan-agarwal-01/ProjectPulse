import './App.css';
import Home from './components/Main/Home';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from './components/Workflow/Admin/Dashboard';
import Project_Management from './components/Workflow/Admin/Project_Management';

function App() {

  return (
    <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home render={<Dashboard />} />} />
        <Route path='/manage-projects' element={<Home render={<Project_Management />} />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;