import jwt from "jsonwebtoken"
import {User} from "../model/user.js"


export const edit = async(req,res)=>{

    try {
        


        const authHeader=req.params.token;
       const{name,sector,agreement} = req.body;
    //check validity
        
            const verified=jwt.verify(authHeader,process.env.KEY);
          
            const id = verified.id
           
      
            
            

          
            const edit = await User.findByIdAndUpdate(id,{name,sector,agreement})
            console.log(edit)

            if(!edit) return res.status(500).json("Folder not found")
            res.status(200).json("Edited")
    
      

       
        
    } catch (error) {
        console.log(error)
        
    }

}