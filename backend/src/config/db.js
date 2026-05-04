import mongoose from "mongoose";

async function connectDB(url) {
    try {
        await mongoose.connect(url)
        console.log("MongoDB connected successfully.")
    } catch (error) {
        console.error(error.message)
    }
}

export default connectDB;