import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  name: String,
  creator: String,
  tags: [String],
  selectedFile: String, // use base64 to turn img to string

  likes: {
    type: [String],
    default: [],
  },

  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostInfo = mongoose.model("PostInfo", postSchema);

export default PostInfo;

