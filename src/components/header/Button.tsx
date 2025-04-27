import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const Button = ({ children, className, href }) => {
  return (
    < >
    { href ? <Link href={href} className={twMerge("bg-sky-300 text-white py-2 px-6 hover:bg-sky-500 cursor-pointer duration-200", className)}>{children} </Link> : <button className={twMerge("bg-sky-300 text-white py-2 px-6 hover:bg-sky-500 cursor-pointer duration-200", className)}>{children} </button>}
      
    </>
  )
}

export default Button
