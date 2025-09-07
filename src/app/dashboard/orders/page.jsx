import OrderCard from "./OrderCard";

export default async function OrdersDashboard() {

    const res = await fetch("http://localhost:3000/api/dashboard/orders");
    const orders = await res.json()
    console.log('orders: ', orders)

    return (
        <div>
            <div className=' px-9 pt-2'>
                <div className="flex items-start justify-between">
                    <h2 id="drawer-title" className="text-lg font-medium text-gray-400 mb-2">Orders List</h2>

                </div>
                {!orders ? (
                    <div className="mt-8">
                        <div className="flow-root">
                            <div className="-my-6 divide-y divide-gray-200 h-96 pt-3">
                                No item in orders
                            </div>
                        </div>
                    </div>
                ) : (


                    // <div className="relative overflow-x-auto">
                    //     <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    //         <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    //             <tr>
                    //                 <th scope="col" className="px-6 py-3">
                    //                     Product name
                    //                 </th>
                    //                 <th scope="col" className="px-6 py-3">
                    //                     Customer
                    //                 </th>

                    //                 <th scope="col" className="px-6 py-3">
                    //                     Order Date
                    //                 </th>
                    //                 <th scope="col" className="px-6 py-3">
                    //                     Total Price
                    //                 </th>
                    //                 <th scope="col" className="px-6 py-3">
                    //                     Status
                    //                 </th>
                    //             </tr>
                    //         </thead>
                    //         <tbody>
                    //             <tr className="bg-white border-b border-gray-200">
                    //                 <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    //                     Apple MacBook Pro 17" Apple MacBook Pro 17"
                    //                 </th>
                    //                 <td className="px-6 py-4">
                    //                     Silver
                    //                 </td>

                    //                 <td className="px-6 py-4">
                    //                     12/03/2025
                    //                 </td>
                    //                 <td className="px-6 py-4">
                    //                     $2999
                    //                 </td>
                    //                 <td className="px-6 py-4 text-orange-600">
                    //                     Pending
                    //                 </td>
                    //             </tr>
                    //         </tbody>
                    //     </table>
                    // </div>



                    <OrderCard orders={orders} />

                )
                }

            </div>
        </div>
    )
}
