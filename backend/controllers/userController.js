const Task = require("../models/Task");
const User = require("../models/User");
const bycrypt = require ("bcryptjs");


// route : GET /api/v1/users/   (admin)
const getUsers = async(req , res) =>{
    try{
        const users = await User.find({ role : 'member'}).select('-password');
        
        //task counts to each user
        const userWithTaskCounts = await Promise.all(
            users.map(async(user)=>{
                const pendingTasks = await Task.countDocuments({
                    assignedTo : user._id,
                    status : "Pending",
                });

                const inProgressTasks = await Task.countDocuments({
                    assignedTo : user._id,
                    status : "In Progress",
                });

                const CompletedTasks = await Task.countDocuments({
                    assignedTo : user._id,
                    status : "Completed",
                });

                return {
                    ...user._doc,  //including all existing data
                    pendingTasks,
                    inProgressTasks,
                    CompletedTasks,
                };

            })
        )

 
    } catch(error){
        res.status(500).json({
            message : "Server Error" , error : error.message
        });
    }
};


// route : GET /api/v1/users/:id
const getUserById = async(req,res)=>{

};



//route : DELETE /api/v1/users/:id
const deleteUser = async(req,res)=>{
    try{

    } catch(error){
        res.status(500).json({
            message : "Server Error" , error : error.message
        });
    }
};



module.exports = { getUsers , getUserById , deleteUser};