import Post from "../models/Post";

export const getAllPosts = async (req, res) => {
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
    post = await post.save();
  } catch (error) {
    console.log(error);
  }
  if (!post) {
    return res.status(500).json({ message: "Unexpected error occured" });
  }
  return res.status(201).json({ post });
};
export const getPostById = async (req, res) => {
  console.log("get");

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
  console.log("update");
  const id = req.params.id;
  const { title, description, location, date, image } = req.body;

  if (
    !title &&
    title.trim() === "" &&
    !description &&
    description.trim() === "" &&
    !location &&
    location.trim() === "" &&
    !date &&
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
      date: new Date(`${date}`),
    });
  } catch (error) {
    console.log(error);
  }
  if (!post) {
    return res.status(500).json({ message: "Unexpected error occured" });
  }
  return res.status(201).json({ message: "updated success", post });
};
