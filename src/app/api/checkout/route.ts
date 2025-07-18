/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextRequest, NextResponse } from "next/server";
import { ProductType } from "../../../../type";
import { Description } from "@headlessui/react";

export const POST = async(request: NextRequest) =>{
    try {
        const reqBody = await request.json();
        const { items, email} = await reqBody;

    const extractingItems = await items?.map((item:ProductType) =>({
        quantity: item?.quantity,
        price_data:{
            currency: 'usd',
            unit_amount: Math.round(item?.price * 100)
        },
        product_data: {
            name: item?.title,
            Description: item?.description,
            images: item?.images,
        },
    }))

        return NextResponse.json({
            message: "Keep alive",
            success: true,
        })
    } catch (error: any) {
        return NextResponse.json({ error: error?.message}, { status: 500 });
    }
};