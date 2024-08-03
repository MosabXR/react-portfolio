import React from 'react'

export default function Contact() {
  return (
    <section className='bg-white text-[#2c3e50] py-48 min-h-screen flex justify-center place-items-center'>
      <div className="container flex flex-col place-items-center gap-2">
        <div className="title flex flex-col place-items-center text-center gap-4">
          <h2 className='text-4xl uppercase font-bold'>Contact Section</h2>
          <div className='star-marker-navy relative'>
            <i className="fa-solid fa-star">
            </i>
          </div>
        </div>
        <div className="form flex flex-col gap-4 w-full md:w-1/2">
          <input placeholder='Username' type="text" className='w-full p-4 border-b-2 border-b-gray-200 rounded-lg focus:outline-none'/>
          <input placeholder='Age' type="number" className='w-full p-4 border-b-2 border-b-gray-200 rounded-lg focus:outline-none'/>
          <input placeholder='Email' type="email" className='w-full p-4 border-b-2 border-b-gray-200 rounded-lg focus:outline-none'/>
          <input placeholder='Password' type="password" className='w-full p-4 border-b-2 border-b-gray-200 rounded-lg focus:outline-none'/>
          <button type='submit' className='bg-[#1abc9c] p-2 text-white rounded'>Send Message</button>
        </div>
      </div>
    </section>
  )
}
