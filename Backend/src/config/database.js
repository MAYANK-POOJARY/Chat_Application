import mongoose from "mongoose";
import config from "./config.js";

async function connectToDB(){
    await mongoose.connect(config.MONGO_URI)
        .then(()=>{
            console.log(`MongoDB connected successfully`)
        })
        .catch((error)=>{
            console.error(`MongoDB connection failed`, error);
            process.exit(1);
        })
}

export default connectToDB;