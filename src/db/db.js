import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, { family: 4 });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
};
