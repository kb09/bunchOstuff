import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String, // use base64 to turn img to string

  likeCount: {
    type: Number,
    default: 0,
  },

  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostInfo = mongoose.model("PostInfo", postSchema);

export default PostInfo;

