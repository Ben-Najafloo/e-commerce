"use client"

import { CardContext } from '@/app/contexts/cardContext';
import { useState, useEffect, useContext } from 'react';
import Link from 'next/link'
import { SlBasket } from "react-icons/sl";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useSession, signIn, signOut } from 'next-auth/react';

const Header = () => {

    //menu
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const { cart } = useContext(CardContext);

    const { data: session } = useSession()
    const [isrender, setIsRender] = useState(false);
    useEffect(
        () => setIsRender(true)
        , [])

    if (!isrender) {
        return null
    }


    return (
        <div>
            <header className="bg-indigo-900 fixed w-full top-0 z-50">
                <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5">
                            <img src="https://behnam.tech/wp-content/uploads/2025/03/output-onlinepngtools.png" alt="" className="h-11 w-auto" />
                        </Link>
                        <div className='hidden md:flex '>
                            <Link href="/" className="text-sm/6 ml-20 font-semibold text-white">All</Link>
                            <Link href={`?category=electronics#products`} className="text-sm/6 ml-7 font-semibold text-white">Electronics</Link>
                            <Link href={`?category=jewelery#products`} className="text-sm/6 ml-7 font-semibold text-white">Jewelery</Link>
                            <Link href={`?category=clothing#products`} className="text-sm/6 ml-7 font-semibold text-white">Clothing</Link>
                        </div>

                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end text-white">
                        {session ? (
                            <>
                                <Link href="/dashboard" className='mr-4 cursor-pointer hover:font-bold'>Dashboard</Link>
                                <div className="text-sm/6 font-semibold text-white">
                                    Hi {session.user.name}
                                </div>
                                <button onClick={() => { signOut() }} className='ml-3 cursor-pointer hover:font-bold'>Sign Out</button>
                            </>
                        ) : (
                            <button onClick={() => { signIn() }} className='cursor-pointer hover:font-bold'>Sign In</button>
                        )}
                        <Link href="/card" className="flex text-sm/6 font-semibold  ml-11">
                            <SlBasket size="20" />
                            <span className='text-red-500 font-bold ml-1 text-xl'>{cart.length}</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <Link href="/card" className="flex text-sm/6 font-semibold  mr-2">
                            <SlBasket size="20" />
                            <span className='text-red-500 font-bold ml-1 text-xl'>{cart.length}</span>
                        </Link>
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
                        </button>
                    </div>
                </nav>


                {/* Mobile Menu */}
                {isOpen && (
                    <nav className="md:hidden bg-indigo-900 text-white shadow-lg">
                        <ul className="flex flex-col space-y-2 px-4 py-4">
                            <li>
                                <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                            </li>
                            <li>
                                <Link href={`?category=electronics#products`} onClick={() => setIsOpen(false)}>Electronics</Link>
                            </li>
                            <li>
                                <Link href={`?category=jewelery#products`} onClick={() => setIsOpen(false)}>Jewelery</Link>
                            </li>
                            <li>
                                <Link href={`?category=clothing#products`} onClick={() => setIsOpen(false)}>Clothing</Link>
                            </li>
                            <li className="border-t border-white mt-2 pt-2">
                                {session ? (
                                    <>
                                        <Link href="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
                                        <button onClick={() => { signOut(); setIsOpen(false); }} className="ml-2">Sign Out</button>
                                    </>
                                ) : (
                                    <button onClick={() => { signIn(); setIsOpen(false); }}>Sign In</button>
                                )}
                            </li>
                        </ul>
                    </nav>
                )}


            </header>

        </div>
    )
}

export default Header
