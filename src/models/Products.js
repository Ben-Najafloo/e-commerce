import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
},
    {
        timestamps: true
    });

// A common way to prevent model re-compilation in Next.js
const Product = mongoose.models.Fake || mongoose.model("Fake", productsSchema);

export default Product;





