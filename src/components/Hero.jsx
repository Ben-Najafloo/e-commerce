"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
import { FaArrowDown, FaHeadphones } from "react-icons/fa6";
import cassa from '../asset/image/cassa-re.png'
import Image from 'next/image';


const Hero = () => {

    const currentPath = usePathname();

    return (
        <div>
            <section className="bg-white  pt-48">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl text-gray-600 tracking-tight leading-none md:text-5xl xl:text-6xl">Payments tool for software companies</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                        <Link href={`${currentPath}#products`} className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 ">
                            Recent Products
                            <FaArrowDown className="w-5 h-5 ml-2 -mr-1" />
                        </Link>
                        <Link href="/" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-300 focus:ring-4 focus:ring-gray-100">
                            Speak to Sales
                            <FaHeadphones className="w-5 h-5 ml-2 -mr-1" />
                        </Link>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <Image src={cassa} alt="mockup" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
