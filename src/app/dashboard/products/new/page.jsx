"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();
    const [productInfo, setProductInfo] = useState({
        title: "",
        category: "",
        price: "",
        description: "",
        image: "",
    });

    const handleInputChange = (e) => {
        setProductInfo({ ...productInfo, [e.target.name]: e.target.value });
    };

    async function handleSubmit(e) {
        e.preventDefault();

        const productData = {
            title: productInfo.title,
            category: productInfo.category,
            price: Number(productInfo.price),
            description: productInfo.description,
            image: productInfo.image,
        };

        try {
            const res = await fetch("/api/dashboard/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(productData),
            });

            const result = await res.json();

            if (res.ok) {
                alert("New product added");
                setProductInfo({
                    title: "",
                    category: "",
                    price: "",
                    description: "",
                    image: "",
                });
                router.push("/dashboard/products");
            } else {
                alert("Failed to add product");
            }
        } catch (error) {
            alert(error.message);
        }
    }


    return (
        <div className='px-9 pt-2 bg-gray-100 rounded-2xl'>
            <div className="flex items-start justify-between">
                <h2 id="drawer-title" className="text-lg font-medium text-gray-500 mb-2">Add new production</h2>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-11">
                <div className="relative z-0 w-full mb-5 group">
                    <input onChange={handleInputChange} value={productInfo.title} type="text" name="title" id="title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input onChange={handleInputChange} value={productInfo.category} type="text" name="category" id="category" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="category" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category</label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input onChange={handleInputChange} value={productInfo.price} type="tel" name="price" id="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input onChange={handleInputChange} value={productInfo.description} type="text" name="description" id="description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                </div>


                <div className="relative z-0 w-full mb-5 group">
                    <input onChange={handleInputChange} value={productInfo.image} type="text" name="image" id="image" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="image" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image</label>
                </div>

                <button type="submit" className="text-white w-full mt-6  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center ">Save</button>
            </form>
        </div>
    )
}

export default Page
