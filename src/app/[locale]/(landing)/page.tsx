import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button'

export default function Index() {
  const t = useTranslations('Index');
  return <main>

    {/* hero */}
    <section className="dark:bg-gray-800 dark:text-gray-100 w-full md:w-10/12 max-w-7xl mx-auto">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-evenly">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img src="/images/15709.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
        </div>
        <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leadi sm:text-6xl">Inventory Management System</h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">Integrate our inventory management system, which offers the best-in-class features!</p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Button size="lg" className='whitespace-nowrap py-3'>Try out for free!</Button>
          </div>
        </div>
      </div>
    </section>

    
  </main>;
}