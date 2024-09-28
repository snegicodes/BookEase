"use client";
import { UserButton } from '@clerk/nextjs'
import { ChartNoAxesGantt } from 'lucide-react'
import React from 'react'

const UserMenu = () => {
    return (
        <div className='flex items-center'>
            <UserButton appearance={{
                elements: {
                    avatarBox: "w-10 h-10"
                }
            }}>
                <UserButton.MenuItems>
                    <UserButton.Link
                        label='My Events'
                        labelIcon={<ChartNoAxesGantt size={14} />}
                        href='/events'
                    />
                    <UserButton.Action label='manageAccount' />
                </UserButton.MenuItems>
            </UserButton>
        </div >
    )
}

export default UserMenu