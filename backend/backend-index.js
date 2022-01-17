import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from 'dotenv';

import postRoutes from  "./routes/posts.js"

import bodyParser from "body-parser";

const app = express(); //set app

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors()); // allows input from external URLS 

dotenv.config();

app.use("/posts", postRoutes);

const PORT= process.env.PORT || 4000; // 


//connecting to mongoDB
mongoose.connect(process.env.LINK_URL)
.then(()=> app.listen(PORT, ()=> console.log(`server running on port ${PORT}`))) // port connected
.catch((error)=>console.log(error.message)); // port not connected 

