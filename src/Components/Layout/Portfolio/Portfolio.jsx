import React from 'react'
import { useState } from 'react'
import WoodenHouse from '../../../assets/img/port1.png'
import Cake from '../../../assets/img/port2.png'
import Circus from '../../../assets/img/port3.png'

export default function Portfolio() {

  let [image, setImage] = useState(WoodenHouse);

  // console.log(image);

  function displayImage(image) {
    setImage(image);
    document.querySelector('.overlay').classList.replace('hidden', 'flex');
  }

  function hideImage(e) {
    if (e.target.classList[0] != 'img') {
      document.querySelector('.overlay').classList.replace('flex', 'hidden');
    }
  }

  return (
    <section className='bg-white text-[#2c3e50] py-64 relative min-h-screen flex justify-center place-items-center'>
      <div onClick={(e) => hideImage(e)} className="overlay w-full h-full bg-black bg-opacity-50 fixed top-0 z-30 hidden">
        <div className="container flex justify-center place-items-center">
          <img src={image} alt="" className='img'/>
        </div>
      </div>
      <div className="container flex flex-col justify-center">
        <div className="title flex flex-col place-items-center text-center gap-4">
          <h2 className='text-4xl uppercase font-bold'>Contact Section</h2>
          <div className='star-marker-navy relative'>
            <i className="fa-solid fa-star">
            </i>
          </div>
        </div>
        <div className="row-tw py-4 gap-0">
          <div className="w-full sm:w-1/2 md:w-1/3 p-2">
            <div onClick={() => displayImage(WoodenHouse)} className="card bg-gray-200 rounded-md overflow-hidden relative group cursor-pointer">
              <img src={WoodenHouse} alt="Wooden House" />
              <div className="card-overlay flex justify-center place-items-center w-full h-full bg-[#1abc9c] absolute top-0 opacity-0 ease-in duration-200 group-hover:opacity-80">
                <i className="fa-solid fa-plus text-white text-9xl"></i>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-2">
            <div onClick={() => displayImage(Cake)} className="card bg-gray-200 rounded-md overflow-hidden relative group cursor-pointer">
              <img src={Cake} alt="Cake" />
              <div className="card-overlay flex justify-center place-items-center w-full h-full bg-[#1abc9c] absolute top-0 opacity-0 ease-in duration-200 group-hover:opacity-80">
                <i className="fa-solid fa-plus text-white text-9xl"></i>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-2">
            <div onClick={() => displayImage(Circus)} className="card bg-gray-200 rounded-md overflow-hidden relative group cursor-pointer">
              <img src={Circus} alt="Circus" />
              <div className="card-overlay flex justify-center place-items-center w-full h-full bg-[#1abc9c] absolute top-0 opacity-0 ease-in duration-200 group-hover:opacity-80">
                <i className="fa-solid fa-plus text-white text-9xl"></i>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-2">
            <div onClick={() => displayImage(WoodenHouse)} className="card bg-gray-200 rounded-md overflow-hidden relative group cursor-pointer">
              <img src={WoodenHouse} alt="Wooden House" />
              <div className="card-overlay flex justify-center place-items-center w-full h-full bg-[#1abc9c] absolute top-0 opacity-0 ease-in duration-200 group-hover:opacity-80">
                <i className="fa-solid fa-plus text-white text-9xl"></i>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-2">
            <div onClick={() => displayImage(Cake)} className="card bg-gray-200 rounded-md overflow-hidden relative group cursor-pointer">
              <img src={Cake} alt="Cake" />
              <div className="card-overlay flex justify-center place-items-center w-full h-full bg-[#1abc9c] absolute top-0 opacity-0 ease-in duration-200 group-hover:opacity-80">
                <i className="fa-solid fa-plus text-white text-9xl"></i>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-2">
            <div onClick={() => displayImage(Circus)} className="card bg-gray-200 rounded-md overflow-hidden relative group cursor-pointer">
              <img src={Circus} alt="Circus" />
              <div className="card-overlay flex justify-center place-items-center w-full h-full bg-[#1abc9c] absolute top-0 opacity-0 ease-in duration-200 group-hover:opacity-80">
                <i className="fa-solid fa-plus text-white text-9xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
