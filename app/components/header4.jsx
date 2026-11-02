"use client"
import React from 'react';

const Header4 = () => {
    return (
        <div className='p-6 px-10 flex flex-col lg:flex-row items-center justify-between border border-gray-300 rounded-sm w-[96%] mx-auto'>

            <div className='flex items-center'>
                <div className='w-15 p-2 rounded-full bg-orange-100 mr-8'>
                    <span className='text-5xl '>🔥</span>

                </div>
                <div>
                    <h3 className='text-xl font-bold'>Get access to exclusive deals</h3>
                    <p className='text-sm text-gray-500'>Only the best deals reach your inbox</p>
                </div>

            </div>

            <div className='flex flex-col lg:flex-row items-center justify-center mt-10 lg:mt-0'>

                <div className='relative p-3'>
                    <p className='text-xs absolute bg-white left-6 top-1 z-10 text-gray-500'>Your email</p>
                    <input className='outline-none relative border border-gray-400 p-2 rounded-lg ' type="text" placeholder='e.g., john@gmail.com' />
                </div>

                <div className='p-3 text-center'>
                    <button className='px-6 py-2 rounded-lg bg-red-600 text-white font-bold'>Notify me</button>
                </div>
            </div>

        </div>
    )
}

export default Header4;