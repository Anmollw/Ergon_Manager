const express = require('express');

const authRouter = express.Router();

authRouter.post('/register', registerUser);
authRouter.post('login', loginUser);
authRouter.get("/profile", protect , getUserProfile);
authRouter.put("/profile", protect , updateUserProfile);

module.exports = authRouter;