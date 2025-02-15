import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () =>{
    try {
        const connectionObj = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\nMongoDB Connected DB Host : ${connectionObj.connection.host}`)
    } catch (error) {
        console.log("Connection Error : ",error)
        process.exit(1)
    }
}

export default connectDB