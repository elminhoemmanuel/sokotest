import React from 'react'
import { FaStore } from 'react-icons/fa';
import { RiShoppingBagLine } from 'react-icons/ri';
import { BiUser } from 'react-icons/bi';
import Link from 'next/link'

const DesktopNav = () => {
    return (
        <div className='px-4 md:px-12 lg:px-28 pt-4 pb-8 flex flex-row items-center justify-between border-0 md:border  border-bottom border-gray-300'>
            <div className='flex flex-row justify-start'>
                    <div className='p-3 rounded-full bg-gray-200 mr-4'>
                        <FaStore className='w-12 h-12 text-sokogray' />
                    </div>
                    <div className='flex flex-col pt-3'>
                        <div className='mb-2 text-xl'><h2 className='text-black'>Target</h2></div>
                        <div><h2 className='text-textash whitespace-nowrap'>Bannex Plaza, Wuse 2 , Abuja, Ng</h2></div>

                    </div>

            </div>

            <div className='hidden md:flex flex-row items-center justify-start'>
                <Link href="">
                    <a className='flex flex-row flex-nowrap pr-4 md:pr-12 lg:pr-16'>
                        <div className='pr-2'><RiShoppingBagLine className='w-6 h-6 text-sokogray ' /></div> 
                        <div className='pt-1 text-textash'>Bag</div>
                    </a>
                </Link>
                <Link href="">
                    <a className='flex flex-row flex-nowrap'>
                        <div className='pr-2'><BiUser className='w-6 h-6 text-sokogray ' /></div> 
                        <div className='pt-1 text-textash'>Account</div>
                    </a>
                </Link>
                
                

            </div>
        </div>
    )
}

export default DesktopNav
