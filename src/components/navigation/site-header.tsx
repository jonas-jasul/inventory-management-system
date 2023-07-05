"use client"

import React from 'react'
import { NavigationMenuComponent } from '@/components/ui/custom/navigation-menu' 
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from "@clerk/nextjs";
  

type Props = {}

const SiteHeader = (props: Props) => {
  return (
    <header className='h-16'>
        <div className='h-full flex justify-between items-center max-w-7xl mx-auto'>
            <div>
                <h4>Logo</h4>
            </div>

            <nav className='flex gap-6 items-center'>
                <NavigationMenuComponent />
                <div>
                <SignedIn>
                  {/* Mount the UserButton component */}
                  <UserButton afterSignOutUrl="/"/>
                </SignedIn>
                <SignedOut>
                  {/* Signed out users get sign in button */}
                  <SignInButton />
                </SignedOut>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default SiteHeader