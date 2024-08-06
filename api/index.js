import express from 'express';
import mongoose  from "mongoose";
import dontenv from 'dotenv';
import userRouter from '../api/routes/user.route.js';

dontenv.config();


mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to the DataBase')
    }).catch((err)=>{
    console.log('error')
    })


const app = express();

app.listen(3000, () => {
    console.log("Server running on Port 3000!!!")
});

app.use('/api/user', userRouter);