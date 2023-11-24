import  Express from "express";
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose";
import userRoute from "./routes/user.js"
import cookieParser from "cookie-parser";




dotenv.config()

const app = Express()
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });

  app.use(cookieParser())

app.use(Express.json())

app.use(cors({
    origin:"*"
}))

app.use(Express.json())

const PORT = 8000



// database connection
mongoose.connect(process.env.MONGO)
.then(()=>console.log("DB connected"))
.catch((err)=> console.log(err))


//middleware

app.use("/api",userRoute)







app.listen(PORT,()=>{
    console.log("Server started")
})