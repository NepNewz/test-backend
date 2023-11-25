import { User } from "../model/user.js";
import jwt from "jsonwebtoken"

export const getUser = async(req,res)=>{
    try{
              
        const authHeader=req.params.token;
        
            const verified=jwt.verify(authHeader,process.env.KEY);
          
            const id = verified.id
           
      
         const edit = await User.findById(id)
            console.log(edit)

            if(!edit) return res.status(500).json("Folder not found")
            res.status(200).json(edit)
    
        } catch (error) {
        console.log(error)
        
    
    }
}