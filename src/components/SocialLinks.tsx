/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

const linksData = [
  { icon: <FaGithub/>, href: "https://github.com/rehan606" },
  { icon: <FaFacebook/>, href: "https://www.facebook.com/kh.rehan207" },
  { icon: <FaLinkedin/>, href: "https://www.linkedin.com/" },
  { icon: <FaYoutube/>, href: "https://youtube.com" },
  { icon: <FaEnvelope/>, href: "https://gmail.com" },
]

const SocialLinks = ({className, iconStyle} : {className?:string, iconStyle?:string}) => {
  return (
    <div className={twMerge('text-xl py-2 text-white/50 flex items-center gap-x-2 ')}>
      {linksData?.map((item, index) => (
          <Link key={index} href={item?.href} target='blank' className={twMerge('border border-white/20 inline-flex p-2 rounded-full hover:text-sky-500 hover:border-sky-500 duration-300 cursor-pointer', iconStyle)}>
            {item?.icon}
          </Link>
      ))
      }
      
    </div>
  )
}

export default SocialLinks
