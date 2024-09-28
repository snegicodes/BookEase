import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { PenBox } from 'lucide-react'

const Header = () => {
  return (
    <nav className='mx-auto py-2 px-8 flex justify-between items-center shadow-md border-b-2'>
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
            <Button variant='outline'>Login</Button>
        </div>
    </nav>
  )
}

export default Header