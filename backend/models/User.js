import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  posts: [
    {
      //this is post array which a user can have multiple post which is refering to the Post
      type: mongoose.Types.ObjectId,
      ref: "Post",
    },
  ],
});
export default model("User", userSchema);
