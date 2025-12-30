import React from 'react'

const Navbar = () => {
    return (
        <div className='h-[70px] w-full bg-gray-50/5 flex gap-3 absolute items-center px-3'>
            <img className='h-10' src="/images/icon.png" alt="" />
            <a href='#hero' className='text-white text-[1.7em] font-semibold  cursor-pointer'>Home</a>
        </div>
    )
}

export default Navbar