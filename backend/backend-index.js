import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

const app = express(); //set app

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors()); // allows input from external URLS

dotenv.config();

app.use("/posts", postRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 4000; //

//connecting to mongoDB
mongoose
  .connect(process.env.LINK_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port ${PORT}`))
  ) // port connected
  .catch((error) => console.log(error.message)); // port not connected

// mongoose.set('useFindAndModify', false);
