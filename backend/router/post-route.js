import { Router } from "express";
import {
  getAllPosts,
  addPost,
  getPostById,
  updatePost,
} from "../controllers/post-controller";

const postRouter = Router();

postRouter.get("/", getAllPosts);
postRouter.get("/:id", getPostById);
postRouter.post("/", addPost);
postRouter.put("/:id", updatePost);

export default postRouter;
