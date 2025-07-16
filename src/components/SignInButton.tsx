"use client"
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import { LiaUser } from 'react-icons/lia'

const SignInButton = () => {
    const { data: session } = useSession()

    return (
        <>
            { session?.user ? (
                <div 
                    onClick={() => signOut() } 
                    className='flex items-center gap-2 cursor-pointer text-sm'>
                    <div className='border-2 border-gray-700  rounded-full w-10 h-10'>
                        <Image src={session?.user?.image} alt='profie_image' width={200} height={200} className='w-full h-full rounded-full object-cover'/>
                    </div>
                    <div>
                        <p className='text-xs'>Hello, {session?.user?.name}</p>
                        <p className='font-medium'>Logout</p>
                    </div>
                </div>) 
                : 
                (<div onClick={() => signIn() } 
                className='flex items-center gap-2 cursor-pointer text-sm'>
                    <div className='border-2 border-gray-700 p-1.5 rounded-full text-xl'>
                        <LiaUser/>
                    </div>
                    <div>
                        <p className='text-xs'>Hello, Guests</p>
                        <p className='font-medium'>Login / Register</p>
                    </div>
                </div>)
            }
        </>
    )
}

export default SignInButton
