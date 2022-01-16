import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
// import bodyParser from "body-parser";

const app = express(); //set app

app.use(cors()); // allows input from external URLS 
const PORT= process.env.PORT || 4000; // 


//connecting to mongoDB 
mangoose.connect(process.env.LINK_URL)
.then(()=> app.listen(PORT, ()=> console.log(`server running on port {PORT}`))) // port connected
.catch((error)=>console.log(error.message)); // port not connected 

