import mongoose from "mongoose"


const user = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    sector:{
        type:String,
        required:true
    },
    agreement:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

export const User = mongoose.model("Users",user)