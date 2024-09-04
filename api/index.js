import express from "express";
import mongoose from "mongoose";
import dontenv from "dotenv";
import userRouter from "../api/routes/user.route.js";
import authRouter from "../api/routes/auth.route.js";
import cookieParser from "cookie-parser";

dontenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to the DataBase");
  })
  .catch((err) => {
    console.log("error");   
  });

const app = express();

app.use(express.json());
app.use(cookieParser());


app.listen(3000, () => {
  console.log("Server running on Port 3000!!!");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);


// middleware to handle possible errors in sign up
app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success:false,
    statusCode,
    message
  });
});