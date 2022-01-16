import mongoose from 'mongoose';

const postSchema = mongoose.Schema({

  title: String,
  creator: String,
  selectedFile: String, // use base64 to turn img to string
  tags: [String],
  message: String,

  likeCount:{
    type: Number,
    default: 0
  },

  createdAt: {
    type: Date,
    default: new Date()
  },

})

const postInfo = mongoose.model('postInfo', postSchema);

export default postInfo;