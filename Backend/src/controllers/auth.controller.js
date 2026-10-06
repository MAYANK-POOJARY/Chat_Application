import config from "../config/config.js";
import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken"


async function sendTokenResponse(user, res, statusCode, message){

    const token = jwt.sign({ id: user._id}, config.JWT_SECRET, { expiresIn: "7d"});

    res.cookie("token", token);

    res.status(statusCode).json({
        message,
        user:{
            id: user._id,
            email: user.email,
            fullName: user.fullName,
            profilePic: user.profilePic
        }
    })
}


export async function register(req, res){
    
    try {
        const { email, password, fullName } = req.body;

        const isUserExist = await userModel.findOne({email});
        if(isUserExist){
            return res.status(400).json({
                message: "User with this email already exists"
            })
        }

        const user = await userModel.create({
            email, password, fullName
        })

        await sendTokenResponse(user, res, 201, "User registered successfully")

    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Server error" });
    }
}

export async function login(req,res){
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email }).select("+password");

        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const isPasswordMatch = await user.comparePassword(password);

        if (!isPasswordMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        await sendTokenResponse(user, res, 200,"User logged in successfully");

    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Server error" });
    }
}

export async function getMe(req, res){
    const user = req.user;
    res.status(200).json({
        message: "User fetched successfully",
        user
    })
}