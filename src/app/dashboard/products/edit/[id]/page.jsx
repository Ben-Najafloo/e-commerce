"use client"

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link';

const EditProduct = () => {
    const router = useRouter();
    const { id } = useParams();

    const [productInfo, setProductInfo] = useState({
        title: "",
        category: "",
        price: 0,
        description: "",
        image: "",
    });

    useEffect(() => {
        async function fetchProduct() {
            const res = await fetch(`/api/dashboard/products/${id}`);
            const data = await res.json();
            setProductInfo(data)
        }
        fetchProduct()
    }, [])

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
            const res = await fetch(`/api/dashboard/products/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(productData),
            });

            if (res.ok) {
                alert(`Product with ${id} id edited`);
                setProductInfo({
                    title: "",
                    category: "",
                    price: "",
                    description: "",
                    image: "",
                });
                router.push("/dashboard/products");
            } else {
                alert("Failed to edit product");
            }
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className='px-9 pt-4 rounded-2xl'>
            <div className="flex items-start justify-between">
                <h2 id="drawer-title" className="text-lg font-medium mb-2">Production id: {id}</h2>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-11">
                <div className="relative z-0 w-full mb-5 group">
                    <input onChange={handleInputChange} value={productInfo.title} type="text" name="title" id="title" className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 text-gray-600 dark:text-gray-200" placeholder=" " required />
                    <label htmlFor="title" className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input onChange={handleInputChange} value={productInfo.category} type="text" name="category" id="category" className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 text-gray-600 dark:text-gray-200" placeholder=" " required />
                    <label htmlFor="category" className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category</label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input onChange={handleInputChange} value={productInfo.price} type="tel" name="price" id="price" className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 text-gray-600 dark:text-gray-200" placeholder=" " required />
                    <label htmlFor="price" className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input onChange={handleInputChange} value={productInfo.description} type="text" name="description" id="description" className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 text-gray-600 dark:text-gray-200" placeholder=" " required />
                    <label htmlFor="description" className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                </div>


                <div className="relative z-0 w-full mb-5 group">
                    <input onChange={handleInputChange} value={productInfo.image} type="text" name="image" id="image" className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 text-gray-600 dark:text-gray-200" placeholder=" " required />
                    <label htmlFor="image" className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image</label>
                </div>

                <Link href="/dashboard/products" className="text-white w-full mt-6  bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm sm:w-auto px-5 py-2.5 text-center ">Back</Link>
                <button type="submit" className="text-white w-full mt-6  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm sm:w-auto px-5 py-2 text-center ml-3">Edit</button>
            </form>
        </div>
    )
}

export default EditProduct
