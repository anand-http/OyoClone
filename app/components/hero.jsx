import React from 'react';
import Image from 'next/image';
// import heroimg from '/banner1.jpg';
// import banner from '/banner2.jpg'

const Hero = () => {
    return (
        <div className='p-7'>
            <div className='mb-20'>
                <Image className='w-full rounded-sm' width={100} layout="responsive" height={100}  src={"/banner1.jpg"} alt='HeroImage' />
            </div>
            <div>
                <Image className='w-full rounded-sm' width={100} layout="responsive" height={100}  src={"/banner2.jpg"} alt='Banner' />
            </div>
        </div>
    )
}

export default Hero;