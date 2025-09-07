"use client"

import React from 'react'
import { useRouter, useParams } from 'next/navigation'

const Page = () => {
    const router = useRouter()
    const { id } = useParams()

    async function deleteProduct() {
        try {
            const res = await fetch(`/api/dashboard/products/${id}`, {
                method: "DELETE",
            })
            if (res.ok) {
                router.push('/dashboard/products')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <div className="flex items-start justify-between">
            <div tabindex="0" className="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg bg-gray-600 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
                    <div className="bg-gray-600 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-500/10 sm:mx-0 sm:size-10">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" className="size-6 text-red-400">
                                    <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 id="dialog-title" className="text-base font-semibold text-white">Dealete the production</h3>
                                <div className="my-4">
                                    <p className="text-sm text-gray-400">Are you sure you want to delete this production? </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-700/25 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button onClick={deleteProduct} type="button" className="inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm  text-white hover:bg-red-400 sm:ml-3 sm:w-auto">Delete</button>
                        <button onClick={() => { router.push('/dashboard/products') }} className="mt-3 inline-flex w-full justify-center rounded-md bg-white/10 px-3 py-2 text-sm  text-white inset-ring inset-ring-white/5 hover:bg-white/20 sm:mt-0 sm:w-auto">Cancel</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Page
