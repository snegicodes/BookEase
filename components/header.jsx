import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { PenBox } from 'lucide-react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import UserMenu from './user-menu'

const Header = () => {
    return (
        <nav className='shadow-md border-b'>
            <div className='container mx-auto py-2 flex justify-between items-center'>
                <Link href={'/'} className='flex items-center'>
                    <Image
                        src={'/logo.png'}
                        alt='logo'
                        width={200}
                        height={80}
                        className='h-16 w-auto'
                    />
                </Link>

                <div className='flex gap-4 items-center'>
                    <Link href={"/events?create=true"}>
                        <Button className='flex gap-2 items-center'>
                            <PenBox size={18} />
                            Create Event
                        </Button>
                    </Link>
                    <SignedOut>
                        <SignInButton forceRedirectUrl='/dashboard'>
                            <Button variant='outline'>Login</Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserMenu />
                    </SignedIn>
                </div>
            </div>
        </nav>
    )
}

export default Header