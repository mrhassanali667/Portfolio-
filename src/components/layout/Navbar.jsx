import React from 'react'

const Navbar = () => {
    return (
        //transparent navbar with backdrop blur: bg-gray-400/7 backdrop-blur-sm
        <div className='h-[75px] w-full flex justify-center gap-3 absolute  text-slate-100'>
            <div className=' max-w-[1300px] w-[90%] flex items-center'>
                <div className='flex justify-start items-center grow'>
                    <h1 className='text-slate-100 text-[1.1em] font-semibold'>Home</h1>
                </div>
                <div className='w-[60%] flex flex-row-reverse lg:flex-row justify-start lg:justify-between items-center gap-3 lg:gap-7 [&>li>a]:hover:text-blue-500'>
                    <ul className=' hidden lg:flex gap-10 justify-between items-center'>
                        <li><a href='#hero' className='nav-link'>Services</a></li>
                        <li><a href='#about' className='nav-link'>About</a></li>
                        <li><a href='#skills' className='nav-link'>Skills</a></li>
                        <li><a href='#projects' className='nav-link'>Projects</a></li>
                        <li><a href='#projects' className='nav-link'>Projects</a></li>
                    </ul>
                    <span className='lg:hidden'>
                        <svg
                            className="w-7 h-7 text-slate-100"
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
                                d="M5 7h14M5 12h14M5 17h14"
                            />
                        </svg>

                    </span>
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