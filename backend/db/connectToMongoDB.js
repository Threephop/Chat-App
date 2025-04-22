import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGO_DB = process.env.MONGO_DB;


const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB,);
        console.log("Connected to MongoDB successfully!");

    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }            
}

export default connectToMongoDB;