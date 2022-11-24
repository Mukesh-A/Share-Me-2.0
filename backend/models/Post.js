import mongoose, { model, Model } from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  user: {
    //user can have one id which is refering to the User
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
export default mongoose.model("Post", postSchema);
