import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req,res)=>{
   const { username , email , password } = req.body;
   //hashing password for DB
   const hashedPassword = bcryptjs.hashSync(password,10);
   const newUser = new User({username , email , password:hashedPassword});
    //try catch for duplicate username or mail error
    try {
        await newUser.save();
   res.status(201).json("User Connected Sucessfully!")
    } catch (error) {
        res.status(500).json(error.message);
    }
};
