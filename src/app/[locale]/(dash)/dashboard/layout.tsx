import { useLocale } from "next-intl";
import DashboardSidebar from "@/components/navigation/dashboard-sidebar";
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const locale = useLocale();
    return (

        <html lang={locale}>
            <body>
                <DashboardSidebar />
                <div className="p-4 sm:ml-64">
                    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                        {children}
                    </div>
                </div>
                
            </body>
        </html>

    )
}