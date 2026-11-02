"use client"
import React, { useContext } from 'react'
import Image from 'next/image'
import HeaderBlock from './headerBlock';
import { TbLetterW } from "react-icons/tb";
import { MdWork } from "react-icons/md";
import { PiBuildingOffice } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { AppContext } from '../context/context';


const Header = () => {
    const router = useRouter();

    const { auth,updateAuth } = useContext(AppContext);

    const handleLogout = () => {
        Cookies.remove('user');
        updateAuth(false);
        router.push('/login')
    }
    return (
        <div className='flex w-full h-20 items-center px-8 justify-between border-b border-gray-300 fixed top-0 bg-white'  >
            <Link href={"/"}>
                <Image src={"/logo.png"} alt='Logo' width={200} height={200} className='w-28 object-cover' />
            </Link>

            <div className='flex h-full '>
                <HeaderBlock icon={<TbLetterW />} title={"Become a Member"} para={"Additional 10% off on stays"} />
                <HeaderBlock icon={<MdWork />} title={"Oyo for Business"} para={"Trusted by 500 Corporates"} />
                <HeaderBlock icon={<PiBuildingOffice />} title={"List your properties"} para={"Start earning in 30 min."} />
                <HeaderBlock icon={<IoCallOutline />} title={"9695680505"} para={"Call us to book now"} />


                {
                    auth ? (<div className='flex items-center'><p onClick={handleLogout} className=' bg-green-500 text-white p-2 rounded-sm font-bold cursor-pointer'>Logout</p></div>) :
                        (<Link href={"/login"} className='flex items-center'>
                            <FaUserCircle className='text-2xl mr-1' />
                            <p className='font-bold'>Login/Signup</p>
                        </Link>)

                }

            </div>
        </div>
    )
}

export default Header