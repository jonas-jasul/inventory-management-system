"use client"

import {
  SignedIn,
  SignedOut,
  UserButton
} from "@clerk/nextjs";
import { useEffect, useState } from 'react'

import { NavigationMenuComponent } from '@/components/ui/custom/navigation-menu'
import AuthButton from '@/components/ui/custom/auth-button'
import { Button } from '@/components/ui/button'

import Link from 'next/link'


type Props = {}

const ProfileIconSkeleton = () => {
  return (
    <div className='w-8 h-8 rounded-full bg-gray-200 animate-pulse'></div>
  )
};

const SiteHeader = (props: Props) => {
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    setIsLoaded(true)
  }, [])



  return (
    <header className='h-16'>
      <div className='h-full flex justify-between items-center max-w-7xl mx-auto'>
        <div>
          <h4>Logo</h4>
        </div>

        <nav className='flex gap-6 items-center'>
          <NavigationMenuComponent />
          {isLoaded ? (
            <>
              <SignedIn>
                {/* Mount the UserButton component */}
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
              <SignedOut>
                {/* Signed out users get sign in button */}
                <Link href='/sign-up'>
                    <Button>Sign Up</Button>
                </Link>
              </SignedOut>
            </>
          ) : (<ProfileIconSkeleton />)}

        </nav>
      </div>
    </header>
  )
}

export default SiteHeader