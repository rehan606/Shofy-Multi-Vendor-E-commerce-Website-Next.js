
import React from 'react'
import { LiaUser } from 'react-icons/lia'

const SigningButton = () => {
    return (
        <div>
            <div className='flex items-center gap-2 cursor-pointer text-sm'>
                <div className='border-2 border-gray-700 p-1.5 rounded-full text-xl'>
                    <LiaUser/>
                </div>
                <div>
                    <p className='text-xs'>Hello, Guests</p>
                    <p className='font-medium'>Login / Register</p>
                </div>
            </div>
        </div>
    )
}

export default SigningButton
