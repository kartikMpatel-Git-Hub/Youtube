// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js"


dotenv.config({
    path:"./env"
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`Server Is Running On PORT : ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("Connection Failed : ",error)
})