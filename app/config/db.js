import mongoose from "mongoose";

export const connectDb = async () => {
    const uri = process.env.MONGO_URI
    try {
        if (mongoose.connection.readyState >= 1) return;

        await mongoose.connect(uri);
        console.log("database connected successfully");
    } catch (error) {
        console.log(error);
    }
}