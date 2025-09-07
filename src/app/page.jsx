import Hero from "@/components/Hero";
import Products from "@/components/Products";

export default async function Home({ searchParams }) {

  const category = await searchParams.category;

  const url = category ? `http://localhost:3000/api/products?category=${category}`
    : "http://localhost:3000/api/products"

  const res = await fetch(url);
  const products = await res.json()

  console.log('test for products: ', products)
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
