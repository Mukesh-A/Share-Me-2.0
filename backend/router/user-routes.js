import { Router } from "express";
import { getAllUsers, signup, login,getUserById } from "../controllers/user-conrollers";

const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/signup", signup);
userRouter.post("/login", login);

export default userRouter;
