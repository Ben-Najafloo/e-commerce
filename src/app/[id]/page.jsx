import ProductDetails from "@/components/ProductDetails";

export default async function ProductPage({ params }) {
    try {

        const res = await fetch(`http://localhost:3000/api/products/${params.id}`);

        const product = await res.json();

        return <ProductDetails product={product} />;

    } catch (error) {
        console.error("Error in ProductPage component:", error);
        return <div>An error occurred while loading the product. Please try again.</div>;
    }
}