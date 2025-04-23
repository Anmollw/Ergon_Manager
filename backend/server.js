require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require('path');
const connectDb= require("./config/db.js");

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET","POST", "DELETE","PUT"],
    allowedHeaders: ["Content-Type" , "Authorization"]
}))

connectDb();
app.use(express.json());

//Routes
const mainRouter = require ('./routes/index.js');
app.use("/api/v1", mainRouter)

//starting server

const PORT= process.env.PORT|| 5000 ;
app.listen(PORT,()=> console.log(`Server running on port ${PORT}`));