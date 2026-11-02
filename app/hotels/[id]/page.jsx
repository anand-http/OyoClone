"use client"
import { CarouselDefault } from '@/app/components/carousel'
import { AppContext } from '@/app/context/context'
import { useParams } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import { FaWifi } from 'react-icons/fa'
import { TbAirConditioning } from 'react-icons/tb'
import { PiTelevision } from "react-icons/pi";
import { GiElevator } from "react-icons/gi";
import { MdPower } from "react-icons/md";
import { getSingleHotel } from '@/app/lib/getSingleHotel'
import Link from 'next/link'
import SkeletonLoader from '@/app/components/skeletonLoader'

const SingleHotel = () => {
    const { auth } = useContext(AppContext);
    const [hotel, setHotel] = useState();
    const [loading, setLoading] = useState(true);
    const params = useParams()
    const id = params.id;

    useEffect(() => {
        const gethotel = async () => {
            setLoading(true);
            const singleHotel = await getSingleHotel(id);
            setHotel(singleHotel);
            setLoading(false);
        }
        if (id) {
            gethotel();
        }
    }, [id])

    if (loading) {
        return <SkeletonLoader />;
    }

    if (!hotel) {
        return <div>Hotel not found</div>;
    }

    return (
        <div className='h-screen'>
            <div className='h-1/2'>
                <CarouselDefault hotel={hotel} />
            </div>

            <div className='flex lg:flex-row flex-col justify-between p-10'>

                <div className='w-full'>

                    <h1 className='text-3xl font-bold'>{hotel?.name}</h1>
                    <p className='text-gray-400 mt-4 '>{hotel?.description}</p>
                    <p className='bg-red-50 text-orange-500 font-bold w-40 rounded-sm my-8 p-2 text-sm'>Company serviced</p>
                    <h1 className='text-2xl font-bold '>Amenities</h1>

                    <div className="flex lg:flex-row flex-col items-start lg:items-center mt-7 gap-6 w-full">
                        <p className="flex items-center "> <FaWifi className="mr-2 w-6 h-6" /> {hotel?.amenities[0]?.name}</p>
                        <p className="flex items-center "><TbAirConditioning className="mr-2 w-6 h-6" />{hotel?.amenities[1]?.name}</p>
                        <p className="flex items-center "> <PiTelevision className="mr-2 w-6 h-6" />{hotel?.amenities[2]?.name}</p>
                        <p className="flex items-center "> <GiElevator className="mr-2 w-6 h-6" />{hotel?.amenities[3]?.name}</p>
                        <p className="flex items-center "> <MdPower className="mr-2 w-6 h-6" />{hotel?.amenities[4]?.name}</p>
                    </div>
                </div>

                <div className='w-full lg:w-1/4 mt-10  lg:mt-0'>
                    <p className='text-3xl font-bold mb-10 lg:mb-14'>₹{hotel?.price}</p>

                    <Link href={auth ? `/payment/${hotel?._id}` : "/login"} className='text-white font-bold bg-green-400 p-3'>
                        Continue to Book
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SingleHotel