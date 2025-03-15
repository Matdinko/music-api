import { Router } from "express";
import { addUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";

const userRouter = Router();

userRouter.post('/user', addUser);
userRouter.get('/user/:id', getUser);
userRouter.get('/user', getUsers);
userRouter.patch('/user/:id', updateUser);
userRouter.delete('/user/:id', deleteUser);

export default userRouter;