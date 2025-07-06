'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import { StateType } from '../../../type'
import Link from 'next/link'

const CartProducts = () => {

    const { cart } = useSelector((state: StateType) => state?.shopy);
    return (
        <div>
            {cart?.length > 0 ? 
                <div><p>Product</p></div> 
                : 
                <div className='bg-white h-96 my-10 flex flex-col gap-4 items-center justify-center py-5 rounded-lg border border-gray-200 drop-shadow-2xl'>
                    <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'> Shopping Cart </h1>
                    <p className='text-base max-w-[700px] text-center text-gray-600 tracking-wide leading-6'>Your cart is empty. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolore ipsa inventore. Vero dolor repellat modi. At consequatur obcaecati animi reiciendis rerum possimus ipsa aperiam ipsum quae enim dolor nisi qui odit dolore dignissimos, </p>

                    

                    <Link href="/" className='bg-sky-500/90 text-gray-100 px-6 py-4 rounded-md hover:bg-sky-500 duration-200 uppercase text-sm font-semibold tracking-wide '> Go To Shopping </Link>

                </div> 
            }
        </div>
    )
}

export default CartProducts
