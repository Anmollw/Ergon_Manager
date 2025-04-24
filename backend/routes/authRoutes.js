const express = require('express');
const { registerUser, loginUser, getUserProfile, updateUserProfile } = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');

const authRouter = express.Router();

authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);
authRouter.get("/profile", protect , getUserProfile);
authRouter.put("/profile", protect , updateUserProfile);

authRouter.post('/upload-image', upload.single("image"), (req,res)=>{
    if(!req.file){
        return res.status(400).json({
            message : "No file upload"
        });
    }
    const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${
        req.file.filename
    }`;

    res.status(200).json({
        imageUrl
    }); 
});


module.exports = authRouter;