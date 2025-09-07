import { connectToMongoDB } from "@/db/mongodb";
import Product from "@/models/Products";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
    try {
        await connectToMongoDB();

        const deletedProduct = await Product.findByIdAndDelete(params.id);

        if (!deletedProduct) {
            return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "The product was deleted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message || "Failed to delete product" }, { status: 500 });
    }
}

export async function PUT(req, { params }) {
    try {
        await connectToMongoDB();
        const data = await req.json()
        const editedProduct = await Product.findById(params.id);

        if (!editedProduct) {
            return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }

        Object.assign(editedProduct, data);
        await editedProduct.save()

        return NextResponse.json({ message: "The product was edited successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message || "Failed to delete product" }, { status: 500 });
    }
}

export async function GET(req, { params }) {
    try {
        await connectToMongoDB();
        const singleProduct = await Product.findById(params.id);

        if (!singleProduct) {
            return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }

        return NextResponse.json(singleProduct, { message: "The product was edited successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message || "Failed to delete product" }, { status: 500 });
    }
}
