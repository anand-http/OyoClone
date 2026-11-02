import React from 'react'

const HeaderBlock = ({ icon, title, para }) => {
    return (
        <div className='px-4 border-r border-gray-200 w-54 h-20 lg:flex items-center hidden '>
           <span className='mr-3 text-2xl'>{icon}</span> 
            <div >
                <h5 className='text-sm line-clamp-1 font-bold'>{title}</h5>
                <p className=' text-sm line-clamp-1 text-gray-400'>{para}</p>
            </div>
        </div>
    )
}

export default HeaderBlock