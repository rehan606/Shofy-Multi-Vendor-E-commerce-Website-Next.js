
import React from 'react'
import { twMerge } from 'tailwind-merge';

interface Props {
    amount?: number;
    className?: string;
}

const PriceFormat = ({ amount, className }: Props) => {

    const formatedPrice = new Number(amount).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2,
    })

    return (
        <span className={twMerge("font-medium ", className)}>{formatedPrice}</span>
    )
}

export default PriceFormat
