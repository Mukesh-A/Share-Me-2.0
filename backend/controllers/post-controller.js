import e from "express";
import mongoose from "mongoose";
import Post from "../models/Post";
import User from "../models/User";

export const getAllPosts = async (req, res) => {
  console.log("getAllPosts");

  let posts;
  try {
    posts = await Post.find();
  } catch (error) {
    return console.log(error);
  }
  if (!posts) {
    return res.status(500).json({ message: "enexpected error occured" });
  }
  return res.status(200).json({ posts });
};
export const addPost = async (req, res) => {
  console.log("addPost");

  const { title, description, location, date, image, user } = req.body;

  if (
    !title &&
    title.trim() === "" &&
    !description &&
    description.trim() === "" &&
    !location &&
    location.trim() === "" &&
    !date &&
    !user &&
    !image &&
    image.trim() === ""
  ) {
    //422 means unprocessible data
    return res.status(422).json({ message: "Invalid Data" });
  }
  let existingUser;
  try {
    existingUser = await User.findById(user);
  } catch (error) {
    return console.log(err);
  }

  if (!existingUser) {
    return res.status(404).json({ message: "User not found" });
  }

  let post;
  try {
    post = new Post({
      title,
      description,
      image,
      location,
      date: new Date(`${date}`),
      user,
    });

    //storing the post id in users
    //so creating a sessison
    const session = await mongoose.startSession();
    session.startTransaction();
    existingUser.posts.push(post);
    await existingUser.save({ session });
    post = await post.save();
    console.log(session);
    session.commitTransaction();
  } catch (error) {
    console.log(error);
  }
  if (!post) {
    return res.status(500).json({ message: "Unexpected error occured" });
  }
  return res.status(201).json({ post });
};
export const getPostById = async (req, res) => {
  console.log("getPostById");

  const id = req.params.id;
  let post;
  try {
    post = await Post.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!post) {
    return res.status(404).json({ message: "No Post Found" });
  }
  return res.status(200).json({ post });
};
export const updatePost = async (req, res) => {
  console.log("updatePost");
  const id = req.params.id;
  const { title, description, location, image } = req.body;

  if (
    !title &&
    title.trim() === "" &&
    !description &&
    description.trim() === "" &&
    !location &&
    location.trim() === "" &&
   
    !image &&
    image.trim() === ""
  ) {
    //422 means unprocessible data
    return res.status(422).json({ message: "Invalid Data" });
  }

  let post;
  try {
    post = await Post.findByIdAndUpdate(id, {
      title,
      description,
      image,
      location,
    });
  } catch (error) {
    console.log(error);
  }
  if (!post) {
    return res.status(500).json({ message: "Unexpected error occured" });
  }
  return res.status(201).json({ message: "updated success", post });
};
export const deleteUser = async (req, res, next) => {
  console.log("deleteUser");

  const id = req.params.id;
  let post;
  try {
    //session to delete post id from the user postlist
    const session = await mongoose.startSession();
    session.startTransaction();
    post = await Post.findById(id).populate("user");
    console.log(post);
    post.user.posts.pull(post);
    await post.user.save({ session });
    console.log(post);

    post = await Post.findByIdAndDelete(id);
    session.commitTransaction();
  } catch (error) {
    console.log(error);
  }
  if (!post) {
    return res.status(500).json({ message: "Unable to delete" });
  }
  return res.status(200).json({ message: "Deleted Successfully" });
};
