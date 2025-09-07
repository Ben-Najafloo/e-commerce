"use client"

import { useContext, useState } from 'react';
import { CardContext } from '../contexts/cardContext';
import Link from 'next/link';
import { MdDelete } from "react-icons/md";

export default function Card() {
    const { cart, removeFromCart, updateQuantity, totalPay, clearCart } = useContext(CardContext);

    const [userInfo, setUserInfo] = useState({
        user_name: "",
        email: "",
        phone: "",
        city: "",
        address: "",
        postal_code: ""
    })

    const handleInputChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault()

        const orderData = {
            user: userInfo,
            cart,
            totalPrice: totalPay()
        }

        try {
            const res = await fetch("/api/orders", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(orderData),
            });


            if (res.ok) {
                alert("order done");
                clearCart();
                setUserInfo({
                    user_name: "",
                    email: "",
                    phone: "",
                    city: "",
                    address: "",
                    postal_code: ""
                })

            } else {
                alert("order failed...")
            }
        } catch (error) {
            alert(error)
        }
    }

    return (

        <div className="flex h-full flex-col overflow-y-auto px-7 pt-24">

            <div className='flex'>
                <div className='w-2/3 px-9 pt-2'>
                    <div className="flex items-start justify-between">
                        <h2 id="drawer-title" className="text-lg font-medium text-gray-400 mb-2">Shopping cart</h2>
                    </div>
                    {!cart ? (
                        <div className="mt-8">
                            <div className="flow-root">
                                <div className="-my-6 divide-y divide-gray-200 h-96 pt-3">
                                    No item in card
                                </div>
                            </div>
                        </div>
                    ) : cart.map((c) => (
                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 border-t border-gray-200">
                            <div className="mt-1">
                                <div className="flow-root">
                                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                                        <li className="flex py-6">
                                            <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                <img src={c.image} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="size-full object-cover" />
                                            </div>

                                            <div className="ml-4 flex flex-1 flex-col">
                                                <div>
                                                    <div className="flex justify-between text-base font-medium text-gray-800">
                                                        <h3>
                                                            <Link href={`${c._id}`}>{c.title}</Link>
                                                        </h3>
                                                        <p className="ml-4">${c.price}</p>
                                                    </div>
                                                    <p className="mt-1 text-sm text-gray-500">{c.category.toUpperCase()}</p>
                                                </div>
                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                    <div>
                                                        <p className="text-gray-600">Quantity: </p>
                                                        <input
                                                            onChange={() => { updateQuantity(c._id, Number(event.target.value)) }}
                                                            type='number'
                                                            value={c.quantity}
                                                            min="1"
                                                            className='w-24 pl-3' />
                                                    </div>
                                                    <div className="flex">
                                                        <button
                                                            onClick={() => { removeFromCart(c._id) }}
                                                            className="text-red-600 hover:text-red-500 cursor-pointer"><MdDelete size={25} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    ))
                    }
                    <div className="border-t border-gray-400 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-700">
                            <p>Total payment</p>
                            <p>${totalPay().toFixed(2)}</p>
                        </div>

                        <p className="mt-0.5 text-sm text-gray-400">Shipping and taxes calculated at checkout.</p>
                        <div className="flex w-full mt-6">
                            <div className="w-2/3 mr-3">
                                <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700">
                                    Checkout
                                </a>
                            </div>
                            <Link href='/' className="cursor-pointer flex justify-center text-center text-sm text-gray-400 pt-2">
                                <p>
                                    or &nbsp;
                                    <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Continue Shopping
                                        <span aria-hidden="true"> &rarr;</span>
                                    </button>
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='w-1/3 px-9 pt-5 bg-gray-100 rounded-2xl'>
                    <div className="flex items-start justify-between">
                        <h2 id="drawer-title" className="text-lg font-medium text-gray-500 mb-2">Your Information</h2>
                    </div>

                    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-11">
                        <div className="relative z-0 w-full mb-5 group">
                            <input onChange={handleInputChange} value={userInfo.user_name} type="text" name="user_name" id="user_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="user_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input onChange={handleInputChange} value={userInfo.email} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <input onChange={handleInputChange} value={userInfo.phone} type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input onChange={handleInputChange} value={userInfo.address} type="text" name="address" id="address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                        </div>

                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input onChange={handleInputChange} value={userInfo.city} type="text" name="city" id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input onChange={handleInputChange} value={userInfo.postal_code} type="text" name="postal_code" id="postal_code" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="postal_code" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Postal Code</label>
                            </div>
                        </div>
                        <button type="submit" className="text-white cursor-pointer mt-6  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm sm:w-auto px-11 py-2.5 text-center ">Submit</button>
                    </form>







                </div>
            </div>
        </div>

    )
}