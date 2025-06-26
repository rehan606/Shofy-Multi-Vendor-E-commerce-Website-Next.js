import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'

const Sidebar = () => {
    return (
        <div className="absolute right-2 bottom-44 border flex flex-col text-2xl border-gray-200 bg-white rounded-md overflow-hidden">
            <button className='p-2 hover:bg-sky-100'>
                <FiShoppingCart/>
            </button>
            
        </div>
    )
}

export default Sidebar
