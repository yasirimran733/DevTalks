import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

export async function createDB() {
    try {
        console.log(process.env.MONGO_URI)
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo Connected!")
    } catch (error) {
        console.log(error)
    }
}