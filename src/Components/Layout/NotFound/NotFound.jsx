import React from 'react'

export default function NotFound() {
  return (
    <section className='bg-[#1abc9c] text-white py-24 h-screen flex justify-center place-items-center'>
    <div className="container flex justify-center">
        <div className="content flex flex-col place-items-center text-center gap-4">
            <h2 className='text-4xl uppercase font-bold'>Error 404 not found</h2>
            <div className='star-marker-white relative'>
                <i className="fa-solid fa-star">
                </i>
            </div>
            <p>Oopsie! make sure you're accessing a valid page.</p>
        </div>
    </div>
</section>
  )
}
