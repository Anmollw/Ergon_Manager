const User = require("../models/User");
const bycrpt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (userId)=>{
    return jwt.sign({id : userId} , process.env.JWT_SECRET, {expiresIn : "7d"});
};

// route : POST /api/v1/auth/register
 const registerUser = async (req,res)=>{
    try {

    } 
    catch(error){
        res.status(500).json({
            message : "Server Error" , error : error.message
        });
    }
 };



 // route : POST /api/v1/auth/login
 const loginUser = async(req,res)=>{
    try {

    } 
    catch(error){
        res.status(500).json({
            message : "Server Error" , error : error.message
        });
    }
 };



 // route : GET /api/auth/profile ( private , jwt required)
 const getUserProfile = async(req,res)=>{
    try {

    } 
    catch(error){
        res.status(500).json({
            message : "Server Error" , error : error.message
        });
    }
 };



 // route :  PUT /api/auth/profile
 const updateUserProfile= async(req,res)=>{
    try {

    } 
    catch(error){
        res.status(500).json({
            message : "Server Error" , error : error.message
        });
    }
 };

 module.exports = { registerUser, loginUser, getUserProfile, updateUserProfile};