
"use client"
import { useState, useEffect, useContext } from 'react';

import { CardContext } from '@/app/contexts/cardContext';
import Link from 'next/link'
import { SlBasket } from "react-icons/sl";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { MdDashboard, MdAccountCircle } from 'react-icons/md'
import { PiSignOutBold } from "react-icons/pi";
import { useSession, signIn, signOut } from 'next-auth/react';
import './Header.css';
import { ThemeToggle } from './ThemeToggle';
import { LangToggle } from './LangToggle';

const Header = () => {

    //menu
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const { cart, lang } = useContext(CardContext);

    const { data: session } = useSession()
    const [isrender, setIsRender] = useState(false);
    useEffect(
        () => setIsRender(true)
        , [])

    const greeting = lang === "en" ? "Hi" : "Ciao";

    if (!isrender) {
        return null
    }


    return (
        <div>
            <header className="fixed w-full top-0 z-50 border-b-2 bg-white dark:bg-black">
                <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8">
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5 text-3xl hover:text-blue-600 cursor-pointer bg-gradient-to-r from-gray-800 to-blue-800 dark:from-white dark:to-blue-800 text-transparent bg-clip-text">
                            BEHNAM
                        </Link>
                        <div className='hidden md:flex '>
                            <Link href="/" className="text-sm/6 ml-20 font-semibold ">{lang === "en" ? "All" : "Tutti"}</Link>
                            <Link href={`?category=electronics#products`} className="text-sm/6 ml-7 font-semibold ">{lang === "en" ? "Electronics" : "Elettronica"}</Link>
                            <Link href={`?category=jewelery#products`} className="text-sm/6 ml-7 font-semibold ">{lang === "en" ? "Jewelery" : "Gioielleria"}</Link>
                            <Link href={`?category=clothing#products`} className="text-sm/6 ml-7 font-semibold ">{lang === "en" ? "Clothing" : "Vestiario"}</Link>
                        </div>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end  items-center">
                        {session ? (
                            <div className='dropdown'>
                                <div className="dropbtn text-sm/6 font-semibold  cursor-pointer">
                                    {greeting} {session.user.name}
                                </div>
                                <div className="dropdown-content bg-white dark:bg-black">

                                    <Link
                                        href="/"
                                        className="ddcb w-full flex items-center space-x-3 px-4 py-4 hover:bg-gray-700 rounded text-left transition-all duration-200 ">
                                        <MdAccountCircle />
                                        <span className="font-medium hidden sm:block">Account</span>
                                    </Link>
                                    <Link
                                        href="/dashboard"
                                        className="ddcb w-full flex items-center space-x-3 px-4 py-4 hover:bg-gray-700 rounded text-left transition-all duration-200 ">
                                        <MdDashboard />
                                        <span className="font-medium hidden sm:block">Dashboard</span>
                                    </Link>
                                    <button
                                        onClick={() => { signOut() }}
                                        className="ddcb cursor-pointer w-full flex items-center space-x-3 px-4 py-4 hover:bg-gray-700 rounded text-left transition-all duration-200 ">
                                        <PiSignOutBold />
                                        <span className="font-medium hidden sm:block">Sign Out</span>
                                    </button>

                                    {/* <button onClick={() => { signOut() }} className='ddcb cursor-pointer hover:font-bold'>Sign Out</button> */}
                                </div>
                            </div>
                        ) : (
                            <button onClick={() => { signIn() }} className='cursor-pointer hover:font-bold'>Sign In</button>
                        )}
                        <Link href="/card" className="flex text-sm/6 font-semibold  ml-11">
                            <SlBasket size="20" />
                            <span className='text-red-500 font-bold ml-1 text-xl'>{cart.length}</span>
                        </Link>
                        <div className="ml-4 hidden md:block">
                            <ThemeToggle />
                        </div>
                        <div className="ml-2 hidden md:block">
                            <LangToggle />
                        </div>
                    </div>

                    <div className="flex items-center md:hidden">
                        {/* Mobile Menu Button */}
                        <Link href="/card" className="flex text-sm/6 font-semibold mr-4">
                            <SlBasket size="20" />
                            <span className='text-red-500 font-bold ml-1 text-xl'>{cart.length}</span>
                        </Link>
                        <div className="mr-4">
                            <ThemeToggle />
                        </div>
                        <div className="mr-2">
                            <LangToggle />
                        </div>
                        <button onClick={toggleMenu} className=" focus:outline-none">
                            {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
                        </button>
                    </div>
                </nav>


                {/* Mobile Menu */}
                {isOpen && (
                    <nav className="md:hidden shadow-lg">
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
                                        <button onClick={() => { signOut(); setIsOpen(false); }} className="ml-4">Sign Out</button>
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