"use client";

import { signOut} from 'next-auth/react'
import React from 'react'

const SignOut = () => {
    return (
        <div>
            <button className="cursor-pointer" onClick={()=>signOut()}> Logout </button>
            
        </div>
    )
}

export default SignOut
