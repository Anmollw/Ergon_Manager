const express = require("express");
const router = express.Router();

const userRouter = require("./userRoutes");
const authRouter = require("./authRoutes");
const taskRouter = require("./taskRoutes");
const reportRouter = require("./reportRoutes");

router.use('/user',userRouter);
router.use('/auth',authRouter);
router.use('/task', taskRouter);
router.use('/report',reportRouter);

module.exports= router