"use client"

import { useState } from 'react';
import { BsCaretDownFill } from "react-icons/bs";
import { motion, AnimatePresence } from 'framer-motion';
import { FiPackage, FiUser, FiMapPin, FiCreditCard, FiCalendar, FiStar } from 'react-icons/fi';


const OrderCard = ({ orders }) => {
    const [expandedOrders, setExpandedOrders] = useState({});

    const toggleOrder = (index) => {
        setExpandedOrders(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const getStatusColor = (status) => {
        switch (status?.toLowerCase()) {
            case 'pending':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'confirmed':
                return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'shipped':
                return 'bg-purple-100 text-purple-800 border-purple-200';
            case 'delivered':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'cancelled':
                return 'bg-red-100 text-red-800 border-red-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const calculateTotalItems = (cart) => {
        return cart?.reduce((total, item) => total + item.quantity, 0) || 0;
    };

    const expandVariants = {
        collapsed: {
            opacity: 0,
            height: 0,
            transition: { duration: 0.3 }
        },
        expanded: {
            opacity: 1,
            height: "auto",
            transition: { duration: 0.3 }
        }
    };

    return (
        <div className="pb-2 mb-3 mt-5">
            <div className="space-y-4">
                {orders?.map((order, index) => (
                    <div key={order._id || index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">

                        {/* Header - Always Visible */}
                        <div
                            className="lg:p-4 p-2 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                            onClick={() => toggleOrder(index)}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex  space-x-3">
                                            <FiPackage className="w-5 h-5 text-blue-500 hidden sm:block" />
                                            <span className="lg:font-semibold lg:text-base text-sm text-gray-800">
                                                Order #{order._id?.slice(-8) || `ORD-${index + 1}`}
                                            </span>
                                            <span className={`px-3 pt-2 rounded-full text-xs font-medium border ${getStatusColor(order.status)}`}>
                                                {order.status?.toUpperCase() || 'UNKNOWN'}
                                            </span>
                                        </div>
                                        <span className="lg:text-lg lg:font-bold text-green-600 ml-3">
                                            ${order.totalPrice?.toFixed(2) || '0.00'}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between text-sm text-gray-600">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex items-center space-x-1">
                                                <FiUser className="w-4 h-4" />
                                                <span>{order.user?.user_name || 'Unknown User'}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <FiPackage className="w-4 h-4 hidden sm:block" />
                                                <span>{calculateTotalItems(order.cart)} items</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <FiCalendar className="w-4 h-4 hidden sm:block" />
                                                <span>{formatDate(order.createAt)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <motion.div
                                    animate={{ rotate: expandedOrders[index] ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="ml-4 p-1 hover:bg-gray-200 rounded-full transition-colors"
                                >
                                    <BsCaretDownFill className="w-4 h-4 text-gray-500 hidden sm:block" />
                                </motion.div>
                            </div>
                        </div>

                        {/* Expanded Details */}
                        <AnimatePresence>
                            {expandedOrders[index] && (
                                <motion.div
                                    variants={expandVariants}
                                    initial="collapsed"
                                    animate="expanded"
                                    exit="collapsed"
                                    className="border-t border-gray-200"
                                >
                                    <div className="p-4 space-y-6 bg-gray-50">

                                        {/* Customer Information */}
                                        <div className="p-4 mb-5">
                                            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                                                <FiUser className="w-5 h-5 mr-2 text-blue-500" />
                                                Customer Information
                                            </h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                                <div>
                                                    <span className="font-medium text-gray-600">Name:</span>
                                                    <p className="text-gray-800">{order.user?.user_name || 'N/A'}</p>
                                                </div>
                                                <div>
                                                    <span className="font-medium text-gray-600">Email:</span>
                                                    <p className="text-gray-800">{order.user?.email || 'N/A'}</p>
                                                </div>
                                                <div>
                                                    <span className="font-medium text-gray-600">Phone:</span>
                                                    <p className="text-gray-800">{order.user?.phone || 'N/A'}</p>
                                                </div>
                                                <div>
                                                    <span className="font-medium text-gray-600">City:</span>
                                                    <p className="text-gray-800">{order.user?.city || 'N/A'}</p>
                                                </div>
                                            </div>

                                            <div className="mt-3">
                                                <span className="font-medium text-gray-600 flex items-center">
                                                    <FiMapPin className="w-4 h-4 mr-1" />
                                                    Address:
                                                </span>
                                                <p className="text-gray-800 mt-1">
                                                    {order.user?.address || 'N/A'}
                                                    {order.user?.postal_code && `, ${order.user.postal_code}`}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Order Items */}
                                        <div className="p-4 mb-5">
                                            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                                                <FiPackage className="w-5 h-5 mr-2 text-green-500" />
                                                Order Items ({order.cart?.length || 0})
                                            </h4>
                                            <div className="space-y-3">
                                                {order.cart?.map((item, itemIndex) => (
                                                    <div key={item._id || itemIndex} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                                                        <img
                                                            src={item.image || '/placeholder-image.jpg'}
                                                            alt={item.title || 'Product'}
                                                            className="w-16 h-16 object-cover rounded-md border"
                                                            onError={(e) => {
                                                                e.target.src = '/placeholder-image.jpg';
                                                            }}
                                                        />
                                                        <div className="flex-1 min-w-0">
                                                            <h5 className="font-medium text-gray-800 truncate">
                                                                {item.title || 'Unknown Product'}
                                                            </h5>
                                                            <p className="text-sm text-gray-500 capitalize">
                                                                {item.category || 'Uncategorized'}
                                                            </p>
                                                            {item.rating && (
                                                                <div className="flex items-center mt-1">
                                                                    <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
                                                                    <span className="text-sm text-gray-600 ml-1">
                                                                        {item.rating.rate || 'N/A'} ({item.rating.count || 0} reviews)
                                                                    </span>
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="text-right">
                                                            <div className="font-semibold text-gray-800">
                                                                ${item.price?.toFixed(2) || '0.00'}
                                                            </div>
                                                            <div className="text-sm text-gray-500">
                                                                Qty: {item.quantity || 0}
                                                            </div>
                                                            <div className="text-sm font-medium text-blue-600">
                                                                ${((item.price || 0) * (item.quantity || 0)).toFixed(2)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Order Summary */}
                                        <div className="p-4 mb-5">
                                            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                                                <FiCreditCard className="w-5 h-5 mr-2 text-purple-500" />
                                                Order Summary
                                            </h4>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Subtotal:</span>
                                                    <span className="font-medium">
                                                        ${(order.totalPrice || 0).toFixed(2)}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Tax:</span>
                                                    <span className="font-medium">$0.00</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Shipping:</span>
                                                    <span className="font-medium">Free</span>
                                                </div>
                                                <hr className="my-2" />
                                                <div className="flex justify-between lg:text-lg font-bold">
                                                    <span>Total:</span>
                                                    <span className="text-green-600">
                                                        ${(order.totalPrice || 0).toFixed(2)}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Order Timeline */}
                                        <div className="p-4">
                                            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                                                <FiCalendar className="w-5 h-5 mr-2 text-indigo-500" />
                                                Order Timeline
                                            </h4>
                                            <div className="text-sm">
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                                    <div>
                                                        <span className="font-medium text-gray-800">Order Created</span>
                                                        <p className="text-gray-500">{formatDate(order.createAt)}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderCard;