import mongoose from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:  {
        type: String,
        required: true,
        select: false
    },
    fullName: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        default: ""
    }
},{ timestamps: true})


userSchema.pre("save", async function(){
    if(!this.isModified("password")) return

    const hash = bcrypt.hashSync(this.password, 10);
    this.password = hash;
})


userSchema.methods.comparePassword = async function(password){
    return bcrypt.compareSync(password, this.password)
}



const userModel = mongoose.model("users", userSchema);

export default userModel;