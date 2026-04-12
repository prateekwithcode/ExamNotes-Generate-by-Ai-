import mongoose from "mongoose";

export const connectDB=async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("Db connected");
    } catch (error) {
        console.log("DB Error",error);
    }
}
