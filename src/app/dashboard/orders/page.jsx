import OrderCard from "./OrderCard";

export default async function OrdersDashboard() {

    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/dashboard/orders`);
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
                    <OrderCard orders={orders} />
                )
                }

            </div>
        </div>
    )
}
