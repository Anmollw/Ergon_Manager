require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require('path');

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET","POST", "DELETE","PUT"],
    allowedHeaders: ["Content-Type" , "Authorization"]
}))

app.use(express.json());

//Routes

//starting server

const PORT= process.env.PORT;
app.link(PORT,()=> console.log(`Server running on port ${PORT}`));