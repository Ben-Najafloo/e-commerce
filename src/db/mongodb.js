// src/db/mongodb.js
import mongoose from "mongoose";

const uri = process.env.MONGOURL;

if (!uri) {
    throw new Error("MongoDB connection string missing in .env");
}

let cached = global._mongoose;

if (!cached) {
    cached = global._mongoose = { conn: null, promise: null };
}

export async function connectToMongoDB() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose
            .connect(uri, { dbName: "shopping" })
            .then((mongoose) => {
                console.log("MongoDB connected... tadaa");
                return mongoose;
            })
            .catch((err) => {
                cached.promise = null;
                console.error("MongoDB connection error:", err);
                throw err;
            });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}
