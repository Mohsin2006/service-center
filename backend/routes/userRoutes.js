import { login, signup } from "../controller/userController.js";
import express from "express"

const userRouter=express.Router()

userRouter.post("/signup", signup)
userRouter.post("/login", login)

export default userRouter;