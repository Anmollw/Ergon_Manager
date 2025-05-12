const Task = require("../models/Task");
const User = require("../models/User");
const excelJS = require("../exceljs");

//route : GET /api/v1/reports/export/tasks
const exportTasksReport = async(req,res) => {
    try {
        const tasks = await Task.find().populate(
            "assignedTo",
            "name email"
        );

        const workbook = new excelJS.Workbook();
        const worksheet = workbook.addWorksheet("Tasks Report");

        worksheet.columns = [
            {header : "Task ID" , key : "_id" , width : "25"},
            {header : "Title" , key : "title" , width : "30"},
            {header : "Description" , key : "description" , width : "50"},
            {header : "Priority" , key : "priority" , width : "15"},
            {header : "Status" , key : "status" , width : "20"},
            {header : "Due Date" , key : "dueDate" , width : "20"},
            {header : "Assigned To" , key : "assignedTo" , width : "30"},
        ];

        tasks.forEach((task)=>{
            const assignedTo = task.assignedTo.map((user)=> `${user.name} (${user.email})`).join(",");
            worksheet.addRow({
                _id : task._id,
                title : task.title,
                description : task.description,
                priority : task.priority,
                status : task.status,
                dueDate : task.dueDate.toISOString().split()("T")[0],
                assignedTo : assignedTo || "Unassigned",
            });
        });

        res.setHeader(                                             // telling client (new learning)
            "Content-Type",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        );

        res.setHeader(
            "Content-Disposition",                                   //handling response(new learning)
            ' attachment; filename="tasks_report.xlsx" '
        );

        return workbook.xlsx.write(res).then(()=>{
            res.end();
        });

    } 
    catch(error){
        res.status(500).json({
            message : "Error while exporting tasks" , error : error.message
        });
    }
};


//route : GET /api/v1/reports/export/users
const exportUserReport = async(req,res)=>{
    try {

    } 
    catch(error){
        res.status(500).json({
            message : "Error while exporting tasks" , error : error.message
        });
    }

};

module.exports = {
    exportTasksReport,
    exportUserReport
};