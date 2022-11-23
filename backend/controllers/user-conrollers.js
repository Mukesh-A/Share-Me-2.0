import { compareSync, hashSync } from "bcryptjs";
import User from "../models/User";

export const getAllUsers = async (req, res) => {
  let users;
  try {
    users = await User.find();
  } catch (error) {
    return console.log(error);
  }
  if (!users) {
    return res.status(500).json({ message: "unexpected error occured" });
  } else {
    return res.status(200).json({ users });
  }
};
export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (
    !name &&
    name.trim() === "" &&
    !email &&
    email.trim() === "" &&
    !password &&
    password.length < 6
  ) {
    //422 means unprocessible data
    return res.status(422).json({ message: "Invalid Data" });
  }

  const hasedPassword = hashSync(password);

  let user;
  try {
    user = new User({ email, name, password: hasedPassword });
    await user.save();
  } catch (error) {
    return console.log(error);
  }
  if (!user) {
    return res.status(500).json({ message: "unexpected error occured" });
  }
  return res.status(201).json({ user });
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email && email.trim() === "" && !password && password.length < 6) {
    //422 means unprocessible data
    return res.status(422).json({ message: "Invalid Data" });
  }
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (error) {
    console.log(error);
  }
  if (!existingUser) {
    return res.status(404).json({ message: "No user found" });
  }
  const isPasswordCorrect = compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Incorrect password" });
  }

  return res
    .status(200)
    .json({ id: existingUser._id, message: "Login successful" });
};
