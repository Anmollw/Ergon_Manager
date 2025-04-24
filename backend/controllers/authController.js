const User = require("../models/User");
const bycrpt = require("bcryptjs");
const { json } = require("express");
const jwt = require("jsonwebtoken");

const generateToken = (userId)=>{
    return jwt.sign({id : userId} , process.env.JWT_SECRET, {expiresIn : "7d"});
};

// route : POST /api/v1/auth/register
const registerUser = async (req,res)=>{
    try {
        const {name, email, password, profileImageUrl, adminInviteToken } = req.body;
        // checking if user exists
        const userExists = await User.findOne({ email });
        if (userExists){
            return res.send(400).json({
                message : "User already exists"
            });
        }

        //Admin member role logic
        let role = "member"
        if ( adminInviteToken && adminInviteToken === process.env.ADMIN_INVITE_TOKEN){
            role = "admin";
        }

        //password hashing
        const salt = await bycrpt.genSalt(10);
        const hashedPassword = await bycrpt.hash(password,salt);

        //creating user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            profileImageUrl,
            role,
        })

        // Return user

        res.status(201).json({
            _id : user._id,
            name : user.name,
            email : user.email,
            role : user.role,
            profileImageUrl: user.profileImageUrl,
            token : generateToken(user._id),
        });

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
        const {email , password} = req.body;

        const user = await User.findOne({ email });
        if(!user){
            return res.status(401).json({
                message : "Invalid email or password"
            })
        }

        const isMatch = await bycrpt.compare(password,user.password);
        if(!isMatch){
            return res.status(401).json({
                message : "Invalid email or password"
            });
        }

        res.json({
            _id : user._id,
            name : user.name,
            email : user.email,
            role : user.role,
            profileImageUrl : user.profileImageUrl,
            token : generateToken(user._id),
        });
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