"use client"
import { CardContext } from '@/app/contexts/cardContext';
import Link from 'next/link'
import { useContext } from 'react';

const Product = ({ product }) => {

    console.log('products from Product card: ', product)

    const { addToCart } = useContext(CardContext);
    return (
        <div className="relative p-2">
            <div className='group'>
                <img
                    alt="image alt"
                    src={product.image}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-base text-gray-700">
                            {product.title.slice(0, 20)}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                    </div>
                    <p className="text-base font-medium text-gray-900">${product.price}</p>
                </div>
            </div>

            <div className="mt-4 flex justify-between text-sm text-black">
                <button
                    onClick={() => { addToCart(product) }}
                    className='cursor-pointer px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none'
                >
                    Add to Cart
                </button>
                <Link href={`${product._id}`} className='cursor-pointer bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded'>
                    More Details
                </Link>
            </div>
        </div>
    )
}

export default Product
