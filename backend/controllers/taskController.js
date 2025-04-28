const Task = require("../models/Task");

// route : GET /api/v1/tasks/
const getTasks= async(req,res)=>{
    try{

    } catch(error){
        res.status(500).json({
            message : "Server error" , error : error.message
        });
    }
};


//route : GET /api/v1/tasks/:id
const getTaskById = async(req,res)=>{};


//route : POST /api/v1/tasks/  (admin)
const createTask = async(req,res)=>{};


// route : PUT /api/v1/tasks/:id
const updateTask = async(req,res)=>{};

//route : DELETE /api/v1/tasks/:id (admin)
const deleteTask = async(req,res)=>{};


//route : PUT /api/v1/tasks/:id/status
const updateTaskStatus = async(req,res)=>{};

//route : PUT /api/v1/tasks/:id/todo
const updateTaskChecklist = async(req,res)=>{};

//route : GET /api/v1/tasks/dashboard-data
const getDashboardData = async(req,res)=>{};

//route : GET /api/v1/tasks/user-dashboard-data
const getUserDashboardData = async(req,res)=>{};

module.exports={
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
    updateTaskStatus,
    updateTaskChecklist,
    getDashboardData,
    getUserDashboardData
};

