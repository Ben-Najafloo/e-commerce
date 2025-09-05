import React from 'react'
import Product from './Product'

const Products = ({ products }) => {
    return (
        <div className="bg-white">
            <div>

                <div className="grid grid-cols-1 gap-x-10 gap-y-32 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <Product key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products
