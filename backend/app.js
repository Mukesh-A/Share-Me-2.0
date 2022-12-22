import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./router/user-routes";
import postRouter from "./router/post-route";
import cors from "cors";
const app = express();
dotenv.config();

//middlewares
//express.json()
//telling the application that we are passing json type data
app.use(cors());
app.use(express.json());
app.use(
  "/users",
  require(path.join(__dirname, "api", "router", "user-routes.js"))
);
app.use(
  "/posts",
  require(path.join(__dirname, "api", "router", "post-route.js"))
);

//connections to mongoo
mongoose
  .connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.lq3cjcm.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() =>
    app.listen(process.env.PORT || 5000, () =>
      console.log("DB Connection successful and Listening to local host 5000")
    )
  )
  .catch((err) => console.log(err));

// static files (build of your frontend)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend", "build")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
  });
}
