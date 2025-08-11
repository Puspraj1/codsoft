import './App.css'
import Home from './components/Pages/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Companies from './components/Pages/companies'
import Login from './components/Pages/Login_Register/Login'
import Register from './components/Pages/Login_Register/Register'
import Postjob from './components/Pages/PostJob/postjob'
import Jobs from './components/Pages/Findjob/jobs'
import Company from './components/Pages/AboutCompany/Company'
import ApiDataCall from './components/Pages/Findjob/RightSection/ApiDataCall'

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },{
    path: "/companies",
    element: <Company/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path:"/register",
    element:<Register/>
  },
   {
    path:"/jobs",
    element:<Jobs/>
  },
  {
    path:"/jobspost",
    element:<Postjob/>
  },
   {
    path:"/api",
    element:<ApiDataCall/>
  }
])

function App() {
  return (
    <div className="min-h-screen font-['poppins']">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App