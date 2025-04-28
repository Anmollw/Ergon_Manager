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
const getTaskById = async(req,res)=>{
    try{

    } catch(error){
        res.status(500).json({
            message : "Server error" , error : error.message
        });
    }
};


//route : POST /api/v1/tasks/  (admin)
const createTask = async(req,res)=>{
    try{
        const {
            title,
            description,
            priority,
            dueDate,
            assignedTo,
            attachments,
            todoChecklist,
        } = req.body;

        if(!Array.isArray(assignedTo)){
            return res.status(500).json({
                message : "assignedTo must be an array of user IDs"
            });
        }

        const task = await Task.create({
            title,
            description,
            priority,
            dueDate,
            assignedTo,
            createdBy: req.user._id,
            todoChecklist,
            attachments
        });

        res.status(201).json({
            message : "Task created succesfully"  , task 
        });

    } catch(error){
        res.status(500).json({
            message : "Server error" , error : error.message
        });
    }
};


// route : PUT /api/v1/tasks/:id
const updateTask = async(req,res)=>{
    try{

    } catch(error){
        res.status(500).json({
            message : "Server error" , error : error.message
        });
    }
};

//route : DELETE /api/v1/tasks/:id (admin)
const deleteTask = async(req,res)=>{
    try{

    } catch(error){
        res.status(500).json({
            message : "Server error" , error : error.message
        });
    }
};


//route : PUT /api/v1/tasks/:id/status
const updateTaskStatus = async(req,res)=>{
    try{

    } catch(error){
        res.status(500).json({
            message : "Server error" , error : error.message
        });
    }
};

//route : PUT /api/v1/tasks/:id/todo
const updateTaskChecklist = async(req,res)=>{
    try{

    } catch(error){
        res.status(500).json({
            message : "Server error" , error : error.message
        });
    }
};

//route : GET /api/v1/tasks/dashboard-data
const getDashboardData = async(req,res)=>{
    try{

    } catch(error){
        res.status(500).json({
            message : "Server error" , error : error.message
        });
    }
};

//route : GET /api/v1/tasks/user-dashboard-data
const getUserDashboardData = async(req,res)=>{
    try{

    } catch(error){
        res.status(500).json({
            message : "Server error" , error : error.message
        });
    }
};

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

