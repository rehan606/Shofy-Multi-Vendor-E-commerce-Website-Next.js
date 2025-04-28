import React from 'react'
import Container from './Container'
import Link from 'next/link'
import Image from 'next/image'
import  logo  from '@/assets/logo.png'
import SocialLinks from './SocialLinks'
import Title from './Title'
import { navigation } from '@/constants'
import { FaEnvelope } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='bg-[#F4F7F9] py-10 lg:py-20'>
        <Container className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
          <div className='flex flex-col gap-y-5'>
            <Link href={"/"}> <Image src={logo} alt='logo'/> </Link>
            <p>We are a team of designers and developers that create high quality Web-Applications</p>
            <SocialLinks iconStyle='bg-white border border-[#0C55AA] shadow-md text-black p-3 text-lg hover:bg-[#0C55AA] hover:text-white cursor-pointer duration-200 rounded-md'/>
          </div>

          <div >
             <Title >My Account </Title>

             <div className='flex flex-col gap-y-2 mt-6'>
                {
                  navigation?.map((item)=>(
                  <Link key={item?.title} href={item?.href} className='hover:text-[#1967c1] duration-200'> {item?.title}</Link>
                  ))
                }
             </div>
          </div>

          <div >
             <Title >Information </Title>

             <div className='flex flex-col gap-y-2 mt-6'>
                {
                  navigation?.map((item)=>(
                  <Link key={item?.title} href={item?.href} className='hover:text-[#1967c1] duration-200'> {item?.title}</Link>
                  ))
                }
             </div>
          </div>

          <div >
             <Title >Talk to US </Title>

             <div className='flex flex-col gap-y-2 mt-6' >
                <p className='text-xs text-gray-400 '>Got Questions? Call us</p>
                <h2 className='text-lg font-bold'>+880 1822 1822 07</h2>
                <p className='flex items-center'> <FaEnvelope className='mr-2'/> shofy@suppert.com</p>
                <p className='flex items-center'> <FaLocationPin className='mr-2'/> Dhaka, Bangladesh</p>
             </div>
          </div>
          
        </Container>
    </div>
  )
}

export default Footer
