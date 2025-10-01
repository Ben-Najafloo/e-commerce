import Hero from "@/components/Hero";
import Products from "@/components/Products";

export default async function Home({ searchParams }) {
  // Await the entire searchParams object first
  const params = await searchParams;
  const category = params.category;

  const url = category
    ? `${process.env.NEXTAUTH_URL}/api/products?category=${category}`
    : `${process.env.NEXTAUTH_URL}/api/products`

  const res = await fetch(url, {
    cache: 'no-store' // Optional: ensures fresh data on each request
  });
  const products = await res.json()

  return (
    <>
      <Hero />

      <div id="products" className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

        <header className='text-3xl mt-24 mb-5'>
          {category ? `Recent Products in ${category.toUpperCase()}` : "Recent Products"}
        </header>

        <Products products={products} />
      </div>
    </>
  );
}