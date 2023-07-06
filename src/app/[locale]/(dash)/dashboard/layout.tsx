import { useLocale } from "next-intl";
import DashboardSidebar from "@/components/navigation/dashboard-sidebar";
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const locale = useLocale();
    return (

        <html lang={locale}>
            <body>
                <DashboardSidebar />
                <div>
                    <div>
                        {children}
                    </div>
                </div>
                
            </body>
        </html>

    )
}