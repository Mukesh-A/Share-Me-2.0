import { hashSync } from "bcryptjs";
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
