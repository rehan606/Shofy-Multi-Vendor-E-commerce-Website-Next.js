/* eslint-disable prefer-const */
'use client';
import { navigation } from '@/constants';
import {  Dialog, DialogPanel,  } from '@headlessui/react';
import Link from 'next/link';
import React, { useState } from 'react'
import { MdClose } from 'react-icons/md';
import { RiMenu3Fill } from 'react-icons/ri'

const MobileNavigation = () => {

  let [isOpen, setIsOpen] = useState(false)

  const toggleMenu = ()=>{
    setIsOpen(true)
  }

  // function open() {
  //   setIsOpen(true)
  // }

  // function close() {
  //   setIsOpen(false)
  // }


  return (
    <>
    <div onClick={toggleMenu} className='text-2xl md:hidden text-gray-500 hover:text-[#1967c1] duration-200 cursor-pointer'>
      <RiMenu3Fill/>

      <Dialog 
        open={isOpen} 
        as="div" 
        className="relative z-50 md:hidden text-white/80" 
        onClose={()=> setIsOpen(false)}>
        <div className="fixed inset-0 flex items-center justify-center p-4 bg-black/90">
          
            <DialogPanel
              transition
              className="w-[94%] space-y-4 bg-primary p-6 border border-gray-400 rounded-md absolute top-10 m-5 bg-black"
            >
              <div className='flex justify-between items-center gap-5'>
                <h3 className='font-semibold text-xl'>Navigation Menu</h3>
                <button onClick={() => setIsOpen(false)} className='text-white/40 text-2xl hover:text-red-600 duration-300 border border-white/20 rounded-sm hover:border-white/40 '>
                  <MdClose/>
                </button>
              </div>

              <div className="flex flex-col gap-5 pt-5">
                {
                  navigation?.map((item)=> (
                    <Link key={item?.title} href={item?.href} onClick={()=> setIsOpen(false)} className='hover:text-blue-500 relative group flex items-center gap-2 ' > 
                    <span className='w-2.5 h-2.5 rounded-full border border-white/80 inline-flex group-hover:border-blue-500'></span> 
                    {item?.title}
                    <span className='absolute w-full h-[1px] bg-white/20 left-0 -bottom-1 group-hover:bg-blue-500 duration-200'></span>
                    </Link>
                  ))
                }
              </div>
              {/* <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  Got it, thanks!
                </Button>
              </div> */}
            </DialogPanel>
         
        </div>
      </Dialog>
    </div>
    </>
  )
}

export default MobileNavigation
