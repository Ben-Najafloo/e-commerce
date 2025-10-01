import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagramSquare, FaGithub, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-white dark:bg-black mt-4 border-t-2">
            <div className="mx-auto max-w-screen-xl space-y-4 px-4 py-4 sm:px-6 lg:space-y-8 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex">
                        {/* <Link href="/" className="-m-1.5 bg-black">
                            <img src="https://behnam.tech/wp-content/uploads/2025/03/output-onlinepngtools.png" alt="" className="h-11 w-auto" />
                        </Link> */}
                        <a href='https://behnam.tech' target='blank' className='ml-4 pt-1 text-lg'>Behnam Tech</a>
                    </div>

                    <ul className="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">
                        <li>
                            <a
                                href="#"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                            >
                                <span className="sr-only">Facebook</span>

                                <FaFacebook />
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                            >
                                <span className="sr-only">Instagram</span>

                                <FaInstagramSquare />
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                            >
                                <span className="sr-only">Twitter</span>

                                <FaTwitter />
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                            >
                                <span className="sr-only">GitHub</span>

                                <FaGithub />
                            </a>
                        </li>

                    </ul>
                </div>

                {/* <div
                    className="grid grid-cols-1 gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16 dark:border-gray-800"
                >
                    <div>
                        <p className="font-medium text-gray-900 dark:>Services</p>

                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                    1on1 Coaching
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                    Company Review
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                    Accounts Review
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                    HR Consulting
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                    SEO Optimisation
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-medium text-gray-900 dark:>Company</p>

                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                    Meet the Team
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                    Accounts Review
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-medium text-gray-900 dark:>Helpful Links</p>

                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                    FAQs
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                    Live Chat
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-medium text-gray-900 dark:>Legal</p>

                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                    Accessibility
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                    Returns Policy
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                    Refund Policy
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                    Hiring-3 Statistics
                                </a>
                            </li>
                        </ul>
                    </div>
                </div> */}

                <p className="text-xs text-gray-500 dark:text-gray-400">
                    &copy; 2025. Behnam Tech. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
