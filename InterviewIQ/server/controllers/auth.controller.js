import genToken from "../config/token.js";
import UserModel from "../models/user.model.js";


export const googleAuth = async (req,res)=>{
    try {
       const {name , email} = req.body;
       if(!name || !email){
        return res.status(400).json({
            message:"Email and Password are required"
        })
       } 

       let user = await UserModel.findOne({email});
       if(user){
        return res.status(400).json({
            message:"User already exist"
        })
       }

       let newUser = await UserModel.create({
        name,email
       })

       let token = await genToken(newUser._id);

       res.cookie("token" , token , {
        http:true,
        secure:false,
        sameSite:"strict",
        maxAge:7 * 24 * 60 * 60 * 1000
       });

       return res.status(200).json({
        user:newUser,
        message:"User created successfully"
       })

    } catch (error) {
        return res.status(500).json({
            message:`Error in google auth user created ${error}`
        })
    }
}


export const logOut = async (req,res)=>{
    try {
        await res.clearCookie("token");
        return res.status(200).json({
            message:"Logout successfully"
        })
    } catch (error) {
        return res.status(500).json({
            message:`Logout error controller ${error}`
        })
    }
}