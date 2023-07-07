
import {
    SignedIn,
    SignedOut,
    UserButton,
    auth
} from "@clerk/nextjs";
import { useEffect, useState } from 'react'

import { NavigationMenuComponent } from '@/components/ui/custom/navigation-menu'
import { Button } from '@/components/ui/button'

import Link from 'next/link'
import { redirect } from 'next/navigation'


type Props = {}

const ProfileIconSkeleton = () => {
    return (
        <div className='w-8 h-8 rounded-full bg-gray-200 animate-pulse'></div>
    )
};

const SiteHeader = async (props: Props) => {
    const { userId } = auth();

    if (!userId) {
        redirect('/sign-in');
    }




    return (
        <header className='h-16'>
            <div className='h-full flex justify-between items-center max-w-7xl mx-auto'>
                <div>
                    <h4>Logo</h4>
                </div>

                <nav className='hidden md:flex gap-6 items-center '>
                    <NavigationMenuComponent />
                    {userId && <UserButton afterSignOutUrl="/" />}

                </nav>
            </div>
        </header>
    )
}

export default SiteHeader