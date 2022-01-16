import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from 'dotenv';
// import bodyParser from "body-parser";

const app = express(); //set app
dotenv.config();

app.use(cors()); // allows input from external URLS 
const PORT= process.env.PORT || 4000; // 


//connecting to mongoDB 
// mongoose.connect(process.env.LINK_URL)
mongoose.connect(process.env.LINK_URL)
.then(()=> app.listen(PORT, ()=> console.log(`server running on port {PORT}`))) // port connected
.catch((error)=>console.log(error.message)); // port not connected 

