import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { SignedIn, SignedOut, UserButton, auth } from "@clerk/nextjs";
import { NavigationMenuComponent } from '@/components/ui/custom/navigation-menu';
import { redirect } from 'next/navigation';

type Props = {};

const ProfileIconSkeleton = () => {
  return (
    <div className='w-8 h-8 rounded-full bg-gray-200 animate-pulse'></div>
  );
};

const SiteHeader = (props: Props) => {
  const { userId } = auth();
  const router = useRouter();

  useEffect(() => {
    if (!userId) {
      router.push('/sign-in');
    }
  }, [userId, router]);

  return (
    <header className='h-16'>
      <div className='h-full flex justify-between items-center max-w-7xl mx-auto'>
        <div>
          <h4>Logo</h4>
        </div>

        <nav className='hidden md:flex gap-6 items-center '>
          <NavigationMenuComponent />
          {userId ? <UserButton afterSignOutUrl="/" /> : <ProfileIconSkeleton />}
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
