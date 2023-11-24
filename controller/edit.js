import jwt from "jsonwebtoken"
import {User} from "../model/user.js"


export const edit = async(req,res)=>{

    try {
        


        const authHeader=req.params.token;
       



        const{name,sector,agreement} = req.body;

       
    
        //check validity
        
            const verified=jwt.verify(authHeader,process.env.KEY);
            console.log(verified)
            const {id} = verified.id
      
            
            

          
            const edit = await User.findById(id)
            console.log(edit)

            if(!edit) return res.status(500).json("Folder not found")
            res.status(200).json("edited")
    
      

       
        
    } catch (error) {
        console.log(error)
        
    }

}