"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
import { FaArrowDown, FaHeadphones } from "react-icons/fa6";
import cassa from '../asset/image/cassa-re.png'
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {

    const currentPath = usePathname();

    const title = "This text animation is created with Framer Motion";
    const words = title.split(" ");

    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.5, // Delay before the first letter starts
                staggerChildren: 0.05, // Delay between each letter
            },
        },
    };

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div>
            <section className="bg-white  pt-48">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <motion.p
                            variants={sentence}
                            initial="hidden"
                            animate="visible"
                            className="max-w-2xl mb-4 text-4xl text-gray-600 tracking-tight leading-none md:text-4xl xl:text-5xl"
                        >
                            {words.map((word, wordIndex) => (
                                <span key={wordIndex} className="inline-block">
                                    {word.split("").map((letterChar, letterIndex) => (
                                        <motion.span variants={letter} key={letterIndex} className="inline-block">
                                            {letterChar}
                                        </motion.span>
                                    ))}
                                    {wordIndex < words.length - 1 && '\u00A0'}
                                </span>
                            ))}
                        </motion.p>


                        <p className="max-w-2xl mb-6 font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                        <Link href={`${currentPath}#products`} className="inline-flex mt-2 items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 ">
                            Recent Products
                            <FaArrowDown className="w-5 h-5 ml-2 -mr-1" />
                        </Link>
                        <Link href="/" className="inline-flex mt-2 items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-300 focus:ring-4 focus:ring-gray-100">
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
