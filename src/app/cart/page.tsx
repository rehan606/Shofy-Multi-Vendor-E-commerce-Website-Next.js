import CartProducts from '@/components/cartPage/CartProducts'
import Container from '@/components/Container'
import React from 'react'

const CartPage = () => {
    return <>
        <Container className='py-10'>
            
            <CartProducts/>
        </Container>;
    </>
}

export default CartPage;
