"use client"
import { signIn } from 'next-auth/react'
import React from 'react'
import { LiaUser } from 'react-icons/lia'

const SigningButton = () => {
    return (
        <div onClick={() => signIn() } className='flex items-center gap-2 cursor-pointer text-sm'>
            <div className='border-2 border-gray-700 p-1.5 rounded-full text-xl'>
                <LiaUser/>
            </div>
            <div>
                <p className='text-xs'>Hello, Guests</p>
                <p className='font-medium'>Login / Register</p>
            </div>
        </div>
    )
}

export default SigningButton
