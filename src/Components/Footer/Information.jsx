import React from 'react'

export default function Information() {
    return (
        <div className='bg-[#2c3e50] text-white'>
            <div className="container">
                <div className="row-tw text-center py-12">
                    <div className="w-full md:w-1/3">
                        <div className="info-cell flex flex-col">
                            <h3 className='text-2xl uppercase font-semibold'>Location</h3>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3">
                        <div className="info-cell">
                            <h3 className='text-2xl uppercase font-semibold'>Around the web</h3>
                            <ul className="flex justify-center gap-2">
                                <li className='size-10 border-2 border-white flex justify-center place-items-center rounded-full'>
                                    <i className="fa-brands fa-facebook"></i>
                                </li>
                                <li className='size-10 border-2 border-white flex justify-center place-items-center rounded-full'>
                                    <i className="fa-brands fa-twitter"></i>
                                </li>
                                <li className='size-10 border-2 border-white flex justify-center place-items-center rounded-full'>
                                    <i className="fa-brands fa-linkedin"></i>
                                </li>
                                <li className='size-10 border-2 border-white flex justify-center place-items-center rounded-full'>
                                    <i className="fa-solid fa-globe"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3">
                        <div className="info-cell">
                            <h3 className='text-2xl uppercase font-semibold'>About Freelancer</h3>
                            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
