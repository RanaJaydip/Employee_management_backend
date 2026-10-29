import mongoose from "mongoose";

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Database connection on ${conn.connection.host}`)
    }catch(error){
        console.log("Database not connected:", error.message);
        process.exit(1);
    }
}
export default connectDB;