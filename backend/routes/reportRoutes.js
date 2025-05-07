const express = require('express');
const { protect, adminOnly } = require('../middlewares/authMiddleware');
const { exportTasksReport, exportUserReport } = require('../controllers/reportController');
const reportRouter = express.Router();

reportRouter.get("/export/tasks", protect, adminOnly, exportTasksReport);  //to export all task a downloadable file
reportRouter.get("/export/users", protect, adminOnly, exportUserReport ); //same as above but for users

module.exports = reportRouter;