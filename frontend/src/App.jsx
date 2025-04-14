import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/User/UserDashBoard";
import PrivateRoute from "./routes/PrivateRoute";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import ManageTasks from "./pages/Admin/ManageTasks";
import CreateTask from "./pages/Admin/CreateTask";
import ManageUsers from "./pages/Admin/ManageUsers";
import UserDashboard from "./pages/User/UserDashBoard";
import MyTask from "./pages/User/MyTasks";
import ViewTaskDetails from "./pages/User/ViewTaskDetails";


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={ <Login />} />
          <Route path="/signup" element={ <SignUp />} />

          {/* Admin routes */}
          <Route element= {<PrivateRoute allowedRoles = {["admin"]}/>}>
             <Route path="/admin/dashboard"  element={<Dashboard />} />
             <Route path="/admin/tasks"  element={<ManageTasks />} />
             <Route path="/admin/create-task"  element={<CreateTask />} />
             <Route path="/admin/users"  element={<ManageUsers />} />
           </Route>


          {/* User routes */}
          <Route element= {<PrivateRoute allowedRoles = {["admin"]} />}>
              <Route path="/user/Dashboard" element={<UserDashboard />} />
              <Route path="/user/my-tasks" element= {<MyTask />} /> 
              <Route path="/user/task-details/:id" element= {<ViewTaskDetails />} /> 
            </Route>  
        </Routes>
        </BrowserRouter>  
    </div>
  )
}

export default App
