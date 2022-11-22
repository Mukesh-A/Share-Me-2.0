import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./router/user-routes";

const app = express();
dotenv.config();

//middlewares
//express.json()
//telling the application that we are passing json type data
app.use(express.json());
app.use("/", userRouter);

//connections to mongoo
mongoose
  .connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.lq3cjcm.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() =>
    app.listen(5000, () =>
      console.log("DB Connection successful and Listening to local host 5000")
    )
  )
  .catch((err) => console.log(err));
