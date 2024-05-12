import { Bars3Icon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import React from 'react'

interface Props {
    openNav:() => void
}

const Nav = ({openNav}:Props) => {
  return (
    <div className="sticky top-0 h-[12vh] bg-[#141c27] shadow-md">
        <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
            <h1 className="flex items-center cursor-pointer text-white font-bold">
                <span className="hidden lg:flex items-center h-[35px] w-[40px] bg-[#141c27] relative">
                <Image src="/images/ExpertsBridge_1.png" alt="user" layout="fill" className="object-cover" />
                </span>
                <span className="text-[25px] ml-2">
                <span>Experts </span>
                <span className="text-yellow-300">BRIDGE</span>
                </span>
            </h1>
            <div className='flex items-center'>
                <div className='nav-link ml-50'> Home</div>
                <div className='nav-link ml-20'> Blog</div>
                <div className='nav-link ml-20'> Projects</div>
                <div className='nav-link ml-20'> Contact</div>
            </div>
            <div onClick={openNav}>
                <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300' />
            </div>
        </div>
    </div>
  )
}

export default Nav