import React from 'react'

export default function About() {
    return (
        <section className='bg-[#1abc9c] text-white py-24 h-screen flex justify-center place-items-center'>
            <div className="container flex justify-center">
                <div className="content flex flex-col place-items-center text-center gap-4">
                    <h2 className='text-4xl uppercase font-bold'>About Component</h2>
                    <div className='star-marker-white relative'>
                        <i className="fa-solid fa-star">
                        </i>
                    </div>
                    <div className="flex flex-wrap gap-4 md:gap-0 text-left">
                        <p className="w-full md:w-1/2">
                            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                        <p className="w-full md:w-1/2">
                            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
