import notFound  from '@/assets/notFound.webp'
import Container from '@/components/Container'
import Button from '@/components/header/Button'
import Image from 'next/image'
import React from 'react'

const NotFoundPage = () => {
  return (
    <Container className='flex flex-col gap-2 items-center py-10'>
        <Image src={notFound} alt='notFoundImage' className='max-w-60'/>
        <p className='text-xl font-semibold'>Oops ! Page Not Found</p>
        <p className='text-sm text-gray-500 max-w-80 text-center'>Whooops! This is embarrassing. Looks like the page you were looking for wasn&apos;t found.</p>
        <Button href='/'>Back to Home</Button>
    </Container>
  )
}

export default NotFoundPage
