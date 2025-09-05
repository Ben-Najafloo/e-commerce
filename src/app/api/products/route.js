import { connectToMongoDB } from "@/db/mongodb";
import Products from "@/models/Products";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        await connectToMongoDB()

        const { searchParams } = new URL(request.url);
        const category = searchParams.get("category")

        let products;

        if (category) {
            products = await Products.find({ category })
        } else {
            products = await Products.find({})
        }



        return NextResponse.json(products, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: "no api .." }, { status: 500 })
    }
}