import { connectToMongoDB } from "@/db/mongodb";
import Order from "@/models/Orders";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        await connectToMongoDB()

        const orders = await Order.find({});

        return NextResponse.json(orders, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "problem is in api/dashboard/order" }, { status: 500 })
    }
}