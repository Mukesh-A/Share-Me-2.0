import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
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
app.use("/users", userRouter);
app.use("/posts", postRouter);

//connections to mongoo
mongoose
  .connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.lq3cjcm.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    if (process.env.NODE_ENV === "production") {
      const path = require("path");
      app.get("/", (req, res) => {
        app.use(express.static(path.resolve(__dirname, "frontend", "build")));
        res.sendFile(__dirname + "/frontend/build/index.html");
        res.send(__dirname + "../frontend/build/index.html");
      });
    }
    // if (process.env.NODE_ENV === "production") {
    //   app.use(express.static(path.join(__dirname, "frontend", "build")));
    //   app.get("/", (req, res) => {
    //     res.sendFile(
    //       path.join(__dirname, "frontend", "build", "index.html")
    //     );
    //     res.send(__dirname, "frontend", "build", "index.html")
    //   });
    // }

    app.listen(5000, () =>
      console.log("DB Connection successful and Listening to local host 5000")
    );
  })
  .catch((err) => console.log(err));

// app.use('/some-route', require(path.join(__dirname, 'fr', 'routes', 'route.js')));

// static files (build of your frontend)

// app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.get("*", function (_, res) {
//   res.sendFile(
//     path.join(__dirname, "../frontend/build/index.html"),
//     function (err) {
//       if (err) {
//         res.status(500).send(err);
//       }
//     }
//   );
// });
