import express, { urlencoded } from "express"
import mongoose from "mongoose"
import { DB_NAME } from "./constants"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()
app.use(cors({
    origin: process.env.CORE_ORIGIN
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

(async () =>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error : ",error)
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log("App Is Listening On Port ",process.env.PORT)
        })
    }
    catch(error){
        console.log("App Opening Error !")
    }
})

export {app}