import mongoose from "mongoose"


const sector = new mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    sector:{
        type:String,
        unique:true,
        required:true
    }
},{
    timestamps:true
})

export const Sector = mongoose.model("Sectors",sector)