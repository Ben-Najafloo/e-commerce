
import React from 'react'
import Product from './Product';

const Products = ({ products }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {products.map((product) => (
                <Product key={product._id} product={product} />
            ))}
        </div>
    )
}

export default Products
