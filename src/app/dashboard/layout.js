import LeftSider from "@/components/dashboard/LeftSider";


export default function DashboardLayout({ children }) {
    return (
        <div className="min-h-screen pt-24 lg:flex xl:flex 2xl:flex">

            <LeftSider />

            <div className="flex-1 p-8 overflow-hidden">
                {children}
            </div>
        </div>
    );
}