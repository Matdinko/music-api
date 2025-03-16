import { Router } from "express";
import { addUser, deleteUser, updateUser } from "../controllers/user.js";

const userRouter = Router();

userRouter.post('/user', addUser);
userRouter.patch('/user/:id', updateUser);
userRouter.delete('/user/:id', deleteUser);

export default userRouter;