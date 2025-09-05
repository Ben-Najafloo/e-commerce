import mongoose from "mongoose";

const uri = process.env.MONGOURL;

if (!uri) {
    throw new Error('connection faild..');
}

let isConnected = false;

export async function connectToMongoDB() {
    if (isConnected) {
        return console.log('already connected')
    }

    try {
        mongoose.connect(uri, { dbName: "shopping" });
        isConnected = true
        console.log('connected...tadaa')
    } catch (error) {
        console.log(error);
        process.exit(1
        )
    }
} 