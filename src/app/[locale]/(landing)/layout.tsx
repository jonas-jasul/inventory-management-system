import {useLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import SiteHeader from '@/components/navigation/site-header';
import { ClerkProvider } from '@clerk/nextjs'
 
export default function LocaleLayout({children, params}: {children: React.ReactNode, params: {locale: string}}) {
  const locale = useLocale();
 
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }
 
  return (
    <ClerkProvider>
        <html lang={locale}>
        <body>
            <SiteHeader />
            {children}
            </body>
        </html>
    </ClerkProvider>
  );
}