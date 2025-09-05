import { connectToMongoDB } from "@/db/mongodb";
import Orders from "@/models/Orders"
import { NextResponse } from "next/server";

export async function POST(req) {

    try {
        await connectToMongoDB();

        const { user, cart, totalPrice } = await req.json()

        const newOrder = new Orders({
            user,
            cart,
            totalPrice,
            status: "pending",
            createAt: new Date()
        })

        await newOrder.save()
        return NextResponse.json({ message: "order is done seccessfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "order is failed" }, { status: 500 })
    }
}