/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */


import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: any;
}

const Button = ({ children, className, href }: Props) => {
  return (
    < >
    { href ? <Link href={href} className={twMerge("bg-sky-300 text-white py-2 px-6 hover:bg-sky-500 cursor-pointer duration-200", className)}>{children} </Link> 
    : 
    <button className={twMerge("bg-sky-300 text-white py-2 px-6 hover:bg-sky-500 cursor-pointer duration-200", className)}>{children} </button>} 
      
    </>
  )
}

export default Button
