import { connectToMongoDB } from "@/db/mongodb";
import Products from "@/models/Products";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    try {
        await connectToMongoDB();

        const product = await Products.findOne({ _id: params.id });

        if (!product) {
            return NextResponse.json({ message: "Product not found" }, { status: 404 });
        }
        return NextResponse.json(product, { status: 200 })
    } catch (error) {
        return NextResponse.json(error, { status: 500 })
    }
}


