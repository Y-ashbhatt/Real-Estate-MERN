import express from 'express';
import mongoose  from "mongoose";
import dontenv from 'dotenv';
dontenv.config();


mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to the DataBase')
    }).catch((err)=>{
    console.log('error')
    })


const app = express();

app.listen(3000, () => {
    console.log("Server running on Port 3000!!!")
})