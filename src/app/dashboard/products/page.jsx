import Link from "next/link";
import { MdDelete, MdOutlineAdd } from 'react-icons/md';
import { CiEdit } from "react-icons/ci";


export default async function ProductInDashboard() {

    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/dashboard/products`);
    const products = await res.json()
    return (
        <div>
            <div className=' px-9 pt-2'>
                <div className="flex items-start justify-between">
                    <h2 id="drawer-title" className="text-lg font-medium text-gray-400 mb-2">Products List</h2>
                    <Link href="/dashboard/products/new" className="text-green-400 cursor-pointer border-2 border-green-400 hover:bg-green-600 hover:text-white focus:ring-1 focus:outline-none focus:ring-black font-medium rounded text-sm px-4 py-2 text-center inline-flex items-center me-2 mb-2">
                        <MdOutlineAdd className="w-4 h-4 me-2" />
                        Add new Product
                    </Link>
                </div>
                {!products ? (
                    <div className="mt-8">
                        <div className="flow-root">
                            <div className="-my-6 divide-y divide-gray-200 h-96 pt-3">
                                No item in card
                            </div>
                        </div>
                    </div>
                ) : products.map((c) => (
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 border-t border-gray-200">
                        <div className="mt-1">
                            <div className="flow-root">
                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                    <li
                                        // onMouseEnter={() => { setShowDeleteEditButton(true) }}
                                        // onMouseLeave={() => { setShowDeleteEditButton(false) }}
                                        className="flex py-2">
                                        <div className="size-12 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                            <img src={c.image} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="size-full object-cover" />
                                        </div>

                                        <div className="ml-4 flex flex-1 flex-col">
                                            <div>
                                                <div className="flex justify-between text-base font-medium text-gray-800">
                                                    <h3>
                                                        <Link href={`${c._id}`}>{c.title}</Link>
                                                    </h3>
                                                    <div className="flex">
                                                        <Link href={`/dashboard/products/edit/${c._id}`}
                                                            className=" hover:text-blue-500 cursor-pointer"><CiEdit size={20} />
                                                        </Link>
                                                        <Link href={`/dashboard/products/delete/${c._id}`}
                                                            className=" hover:text-red-500 cursor-pointer ml-3"><MdDelete size={20} />
                                                        </Link>
                                                    </div>

                                                </div>
                                                <p className="mt-1 text-sm text-gray-500">{c.category.toUpperCase()}</p>
                                            </div>

                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                ))
                }

            </div>
        </div>
    )
}
