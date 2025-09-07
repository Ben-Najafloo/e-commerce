'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const LeftSider = () => {
    const pathname = usePathname();

    const dashboardPath = pathname === '/dashboard';
    const productsPath = pathname === '/dashboard/products';
    const ordersPath = pathname === '/dashboard/orders';

    return (
        <div className="w-64 bg-white shadow-lg border-r border-gray-200 p-8">
            <h1 className="text-2xl text-gray-800 mb-8">Dashboard</h1>

            <nav className="space-y-3">
                <Link
                    href="/dashboard"
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded text-left transition-all duration-200 ${dashboardPath ? 'bg-blue-600 shadow-md hover:bg-blue-700 text-white' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
                        }`}
                >
                    <span className="font-medium">Dashboard</span>
                </Link>

                <Link
                    href="/dashboard/products"
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded text-left transition-all duration-200 ${productsPath ? 'bg-blue-600 shadow-md hover:bg-blue-700 text-white' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
                        }`}
                >
                    <span className="font-medium">Products List</span>
                </Link>

                <Link
                    href="/dashboard/orders"
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded text-left transition-all duration-200 ${ordersPath ? 'bg-blue-600 shadow-md hover:bg-blue-700 text-white' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
                        }`}
                >
                    <span className="font-medium">Orders</span>
                </Link>
            </nav>
        </div>
    )
}

export default LeftSider;