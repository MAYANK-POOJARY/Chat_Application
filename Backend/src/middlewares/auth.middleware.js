import jwt from "jsonwebtoken"
import config from "../config/config.js";
import userModel from "../models/user.model.js";

export async function authenticateUser(req, res, next){
    try {
        const token = req.cookies.token;

        if(!token){
            res.status(401).json({
                message: "Unauthorized"
            })
        }

        const decoded = jwt.verify(token, config.JWT_SECRET);
const user = await userModel.findById(decoded.id);

        if(!user){
            res.status(401).json({
                message: "Unauthorized"
            })
        }

        req.user = user;
        next();

    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: "Unauthorized" })
    }
}