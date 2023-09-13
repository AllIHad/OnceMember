import mongoose from "mongoose";

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Conecnted to Mongodb')
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;