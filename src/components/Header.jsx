"use client"

import { CardContext } from '@/app/contexts/cardContext';
import { useState, useEffect, useContext } from 'react';
import Link from 'next/link'
import { SlBasket } from "react-icons/sl";
import { useSession, signIn, signOut } from 'next-auth/react';

const Header = () => {

    const { data: session } = useSession()
    const [isrender, setIsRender] = useState(false)
    useEffect(
        () => setIsRender(true)
        , [])

    if (!isrender) {
        return null
    }

    const { cart } = useContext(CardContext);
    return (
        <div>
            <header className="bg-indigo-500 fixed w-full top-0 z-50">
                <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5">
                            <span className="sr-only">Your Company</span>
                            <img src="https://behnam.tech/wp-content/uploads/2025/03/output-onlinepngtools.png" alt="" className="h-11 w-auto" />
                        </Link>
                        <Link href="/" className="text-sm/6 ml-20 font-semibold text-white">All</Link>
                        <Link href={`?category=electronics#products`} className="text-sm/6 ml-7 font-semibold text-white">Electronics</Link>
                        <Link href={`?category=jewelery#products`} className="text-sm/6 ml-7 font-semibold text-white">Jewelery</Link>
                        <Link href={`?category=clothing#products`} className="text-sm/6 ml-7 font-semibold text-white">Clothing</Link>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        {session ? (
                            <>
                                <div className="text-sm/6 font-semibold text-white">
                                    Hi {session.user.name}
                                </div>
                                <button onClick={() => { signOut() }} className='ml-3 cursor-pointer hover:font-bold'>Sign Out</button>
                            </>
                        ) : (
                            <button onClick={() => { signIn() }} className='cursor-pointer hover:font-bold'>Sign In</button>
                        )}


                        <Link href="/card" className="flex text-sm/6 font-semibold text-white ml-11">
                            <SlBasket size="20" />
                            <span className='text-red-500 font-bold ml-1 text-xl'>{cart.length}</span>
                        </Link>

                    </div>

                </nav>

            </header>

        </div>
    )
}

export default Header
