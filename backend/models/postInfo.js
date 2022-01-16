import mongoose from 'mongoose';

const postSchema = mongoose.Schema({

  title: String,
  creator: String,
  selectedFile: String, // use base64 to turn img to string
  tags: [String],
  message: String,

})