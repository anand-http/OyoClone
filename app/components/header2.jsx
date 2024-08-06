"use client"
import React from 'react';

const Header2 = () => {
    const List = [
       
        {
            name: "Delhi"
        },
        {
            name: "Gurgaon"
        },
        {
            name: "Hydrabad"
        },
        {
            name: "Kolkata"
        },
        {
            name: "Mumbai"
        },
        {
            name: "Noida"
        },
    ]
    return (
        <div className='sm:flex mt-20 justify-between p-2 bg-gray-100 hidden '>
            {
                List.map((e) => {
                    return (
                        <p key={e.name}>{e.name}</p>
                    )
                })
            }
        </div>
    )
}

export default Header2;