import jwt from "jsonwebtoken"
import localstorage from "node-localstorage"

export const edit = async(req,res)=>{

    try {
        

        console.log(localstorage.getItem('token'))
        const data = jwt.verify(token,process.env.KEY)
        console.log(data)
        // const edit = await Folder.findByIdAndUpdate(id,folderName)

        // if(!edit) return res.status(500).json("Folder not found")
        // res.status(200).json("Folder name updated")
        
    } catch (error) {
        console.log(error)
        
    }

}