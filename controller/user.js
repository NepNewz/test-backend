import { User } from "../model/user.js";
import jwt from "jsonwebtoken"


export const user = async(req,res)=>{
    const{name,sector,agreement} = req.body;
 


    try {
        const newUser = new User({name,sector,agreement})

        const user = await newUser.save()
       if(user){
        const token = await jwt.sign({id:user._id},process.env.KEY)

        res.status(200).json(token)

       }
         } catch (error) {
        console.log(error)
        
    }
}