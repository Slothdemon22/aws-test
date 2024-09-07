import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

const dbConnect = async () => {
    // Check if mongoose is already connected
    if (mongoose.connection.readyState >= 1) {
        // 1 indicates that a connection is established
        return;
    }

    if (!MONGO_URI) {
        throw new Error("Please define the MONGO_URI environment variable inside .env");
    }

    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
        throw error;
    }
};

export default dbConnect;
