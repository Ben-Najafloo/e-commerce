import { connectToMongoDB } from "@/db/mongodb";
import Products from "@/models/Products";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectToMongoDB()

        let products = await Products.find({})

        return NextResponse.json(products, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: "no api .." }, { status: 500 })
    }
}

export async function POST(req) {
    try {
        await connectToMongoDB()
        const data = await req.json();
        const newProduct = new Products(data);
        await newProduct.save()
        return NextResponse.json({ message: "data added to product collection", status: 200 })
    } catch (error) {
        return NextResponse.json({ message: error.message, status: 500 })
    }
}

