import React from 'react'

const Navbar = () => {
    return (
        <div className='h-[75px] w-full flex justify-center gap-3 absolute items-center  text-slate-100'>
            <div className=' max-w-[1300px] w-[90%] flex items-center'>
                <div className='w-auto flex justify-start items-center grow'>
                    <h1 className='text-slate-100 text-[1.1em] font-semibold'>Home</h1>
                </div>
                <div className='w-[60%] min-w-[450px] flex justify-between items-center gap-6 [&>li>a]:text-slate-100 text-[1.05em] font-semibold cursor-pointer [&>li>a]:hover:text-blue-500'>
                    <ul className=' flex gap-10 justify-between items-center'>
                        <li><a href='#hero' >Services</a></li>
                        <li><a href='#about' >About</a></li>
                        <li><a href='#skills' >Skills</a></li>
                        <li><a href='#projects' >Projects</a></li>
                        <li><a href='#projects' >Projects</a></li>
                        <li><a href='#projects' >Projects</a></li>
                    </ul>
                    <span>
                        <svg
                            className="w-5 h-5 text-slate-100"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeWidth={2}
                                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                            />
                        </svg>

                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar