import Image from "next/image"
import { FaWifi } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { FaHotTub } from "react-icons/fa";
import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../context/context";

const Hotel = ({ name, location, price, id, src, amenities }) => {
    
    const {auth} = useContext(AppContext);
    return (
        <div className="flex rounded-lg h-auto lg:h-80 flex-col lg:flex-row mb-10 lg:mb-0 shadow-sm">

            <div className="flex items-center">
                <div className="w-96">
                    <Image width={200} height={200} className="w-full h-72 object-cover rounded-sm" src={src[0]} alt="hotel pic" />
                </div>
                <div className="ml-1 hidden lg:block">
                    <Image className="mb-1 rounded-sm" width={80} height={80} src={src[1]} alt="small pic" />
                    <Image className="mb-1 rounded-sm" width={80} height={80} src={src[2]} alt="small pic" />
                    <Image className="mb-1 rounded-sm" width={80} height={80} src={src[3]} alt="small pic" />
                    <Image className="mb-1 rounded-sm" width={80} height={80} src={src[3]} alt="small pic" />
                    <Image className="mb-1 rounded-sm" width={80} height={80} src={src[4]} alt="small pic" />
                    <Image className="rounded-sm" width={80} height={80} src={src[4]} alt="small pic" />
                </div>

            </div>




            <div className="px-3 py-3 w-full">

                <h2 className="text-xl font-bold mt-1" >{name}  </h2>
                <p className="text-gray-600 font-bold">{location}</p>

                <div className="mt-10  mb-2 ">
                    <button className="px-1 bg-green-600 rounded-sm text-white font-bold mr-2">4.7* </button> (13 rating)
                    <div className="flex md:items-center mb-10 mt-1 flex-col items-start md:flex-row ">
                        <p className="flex items-center mr-6"> <FaWifi className="mr-1" /> {amenities[0].name}</p>
                        <p className="flex items-center mr-6"><FaHotTub className="mr-1" />{amenities[1].name}</p>
                        <p className="flex items-center mr-6"> <TbAirConditioning className="mr-1" />{amenities[2].name}</p>
                        <p className="flex items-center mr-6"> <TbAirConditioning className="mr-1" />{amenities[3].name}</p>
                        <p className="flex items-center"> <TbAirConditioning className="mr-1" />{amenities[4].name}</p>
                    </div>
                </div>



                <div className="flex justify-between items-center">
                    <p className="font-bold text-xl"> ₹{price} </p>

                    <div className="flex items-center">
                        <Link href={`/hotels/${id}`} className="p-3 bg-white border border-black font-bold rounded-sm mr-2">View Detail</Link>
                        <Link href={auth ? `/payment/${id}` : "/login"} className="p-3 bg-green-600 rounded-sm text-white font-bold mr-2">Book Now</Link>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Hotel