const express = require('express');
const { protect, adminOnly } = require('../middlewares/authMiddleware');
const { getUsers, getUserById, deleteUser } = require('../controllers/userController');
const userRouter = express.Router();

userRouter.get('/', protect , adminOnly , getUsers);            // get all users(admin access required)
userRouter.get('/:id', protect , getUserById);                 //specific user
userRouter.delete('/:id', protect , adminOnly , deleteUser);   // deleting a user(admin permis.)

module.exports = userRouter;
