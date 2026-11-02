"use client"
import Link from 'next/link';
import React from 'react';

const Header3 = () => {

    return (
        <div className='mt-20 sm:mt-0 h-60 bg-gradient-to-r from-red-600 to-red-400'>
            <div className='h-48 w-full flex items-center justify-center flex-col'>

                <h1 className='text-white font-bold text-xl lg:text-3xl my-4 text-center'>Over 157000 hotels and homes across 35 countries </h1>

                <div className=' grid max-w-60 grid-cols-12 place-content-center w-60 lg:w-full mx-auto '>
{/*                    
                        <input value={city} onChange={(e) => setCity(e.target.value)}
                            type="text" placeholder='Search by city, hotel' className=' col-span-8 sm:col-span-10 outline-none p-3 rounded-s-sm border-r' /> */}

                        {/* <div className='col-span-3 bg-white text-center lg:flex items-center border-r px-1 hidden '>
                            <p className='font-bold'>Tue, 25 june - Wed, 26 june</p>
                        </div>

                        <div className='col-span-2 bg-white lg:flex items-center px-2 hidden '>
                            <p className='font-bold'>1 Room , 1 Guest</p>
                        </div> */}

                        <Link href={`/hotels`} className='bg-white  col-span-4 sm:col-span-12 p-3 rounded-e-sm text-black text-center'> 🏨 Go Book your Hotels ➡</Link>
                

                </div>


            </div>
        </div>
    )
}

export default Header3;