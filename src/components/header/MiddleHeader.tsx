/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Container from '../Container';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import SearchInput from './SearchInput';
import Link from 'next/link';
import HeaderIcon from './HeaderIcon';
import MobileNavigation from './MobileNavigation';
import SignInButton from '../SignInButton';




const MiddleHeader = () => {
  return (
    <div className='border-b-[1px] border-b-gray-400'>
        <Container className='py-5 flex items-center justify-between gap-4 md:gap-6 lg:gap-20'>
            <Link href={"/"}>
              <Image src={logo} alt="logo" className="w-28" priority></Image>
            </Link>

            <SearchInput/>

            <div className='hidden md:inline-flex items-center gap-3'>
              <SignInButton/>
              <HeaderIcon/>
            </div>

            {/* Mobile Navigation  */}
            <MobileNavigation/>
        </Container>
    </div>
  )
}

export default MiddleHeader