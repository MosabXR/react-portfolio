import React from 'react'
import Avatar from '../../../assets/img/avatar.svg'

export default function Home() {
    return (
        <section className='bg-[#1abc9c] text-white py-24 h-screen flex justify-center place-items-center'>
            <div className="container flex justify-center">
                <div className="content flex flex-col place-items-center text-center gap-4">
                    <img src={Avatar} alt="User Avatar Image" className='w-2/3' />
                    <h2 className='text-4xl uppercase font-bold'>Start Framework</h2>
                    <div className='star-marker-white relative'>
                        <i className="fa-solid fa-star">
                        </i>
                    </div>
                    <p>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </div>
        </section>
    )
}
