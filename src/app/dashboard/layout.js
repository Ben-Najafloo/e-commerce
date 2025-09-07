import LeftSider from "@/components/dashboard/LeftSider";


export default function DashboardLayout({ children }) {
    return (
        <div className="min-h-screen pt-24 bg-gray-50 flex">

            <LeftSider />

            <div className="flex-1 p-8 overflow-hidden">
                {children}
            </div>
        </div>
    );
}