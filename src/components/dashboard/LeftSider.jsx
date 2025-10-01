'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { MdDashboard } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { GrUnorderedList } from "react-icons/gr";



const LeftSider = () => {
    const pathname = usePathname();

    const dashboardPath = pathname === '/dashboard';
    const productsPath = pathname === '/dashboard/products';
    const ordersPath = pathname === '/dashboard/orders';

    return (
        <div className="lg:w-64 shadow-lg border-r border-gray-200 p-4 lg:p-8">

            <nav className="space-x-3 lg:space-y-3 flex sm:block">
                <Link
                    href="/dashboard"
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded text-left transition-all duration-200 ${dashboardPath ? 'bg-blue-600 shadow-md hover:bg-blue-700 text-white' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
                        }`}
                >
                    <MdDashboard />
                    <span className="font-medium hidden sm:block">Dashboard</span>
                </Link>

                <Link
                    href="/dashboard/products"
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded text-left transition-all duration-200 ${productsPath ? 'bg-blue-600 shadow-md hover:bg-blue-700 text-white' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
                        }`}
                >
                    <FaProductHunt />
                    <span className="font-medium hidden sm:block">Products List</span>
                </Link>

                <Link
                    href="/dashboard/orders"
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded text-left transition-all duration-200 ${ordersPath ? 'bg-blue-600 shadow-md hover:bg-blue-700 text-white' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
                        }`}
                >
                    <GrUnorderedList />
                    <span className="font-medium hidden sm:block">Orders</span>
                </Link>
            </nav>
        </div>
    )
}

export default LeftSider;

