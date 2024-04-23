import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-teal-950 py-4 ">
      <div className="flex justify-around w-5/6 mx-auto">

        <div>
          <h1 className="text-2xl font-semibold text-white">Contact</h1>
          <p className='my-2 text-white font-semibold'><a href='mailto:sightboost@gmail.com' className="">Send us a mail</a></p>
          <p className="my-2 text-white font-semibold"><a href='tel:08000000000' className="">Call Us</a></p>
          <p className='my-2 text-white font-semibold'>Find us at: No 76, Naibawa Kano, Nigeria</p>
        </div>

        <div>
          <h1 className="text-2xl font-semibold text-white">Site Map</h1>
          <p className='my-2 text-white font-semibold'><Link href='/services' className="">services</Link></p>
          <p className="my-2 text-white font-semibold"><Link href='/about' className="">About Us</Link></p>
          <p className='my-2 text-white font-semibold'>Gallery</p>
        </div>

        <div>
          <h1 className="text-2xl font-semibold text-white">Terms and Help</h1>
          <p className='my-2 text-white font-semibold'><Link href='/services' className="">Terms and conditions</Link></p>
          <p className="my-2 text-white font-semibold"><Link href='/about' className="">Help</Link></p>
          <p className='my-2 text-white font-semibold'>Report</p>
        </div>

      </div>
    </footer>
  )
}
