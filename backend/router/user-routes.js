import { Router } from "express";
import { getAllUsers, signup } from "../controllers/user-conrollers";

const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.post("/signup", signup);

export default userRouter;
