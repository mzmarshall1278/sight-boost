import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-teal-900 pt-4 ">
      <div className="flex flex-wrap text-center md:text-left justify-around w-11/12 sm:w-5/6 mx-auto">

        <div className="mb-3">
          <h1 className="text-2xl font-semibold text-white">Contact</h1>
          <p className='my-2 text-white '><a href='mailto:sightboost@gmail.com' className="">Send us a mail</a></p>
          <p className="my-2 text-white "><a href='tel:09095343120' className="">Call 1</a></p>
          <p className="my-2 text-white "><a href='tel:08021014371' className="">Call 2</a></p>
          <p className='my-2 text-white text-wrap'><a href="https://maps.app.goo.gl/mzV1ndFZjcoomfrn9">Find us at: No. 227 Naibawa Gabas, Dan Hassan Street, off Zaria road, Kano, Kano State.</a></p>
        </div>

        <div className="mb-3">
          <h1 className="text-2xl text-white font-semibold">Site Links</h1>
          <p className='my-2 text-white'><Link href='/services' className="">services</Link></p>
          <p className="my-2 text-white"><Link href='/about' className="">About Us</Link></p>
          <p className="my-2 text-white"><Link href='/gallery' className="">Gallery</Link></p>
        </div>

        <div className="mb-3">
          <h1 className="text-2xl font-semibold text-white">Terms and Help</h1>
          <p className='my-2 text-white'><Link href='/' className="">Terms and conditions</Link></p>
          <p className="my-2 text-white "><Link href='/' className="">Help</Link></p>
          <p className='my-2 text-white'>Report</p>
        </div>
      </div>
      <div className="text-center font-bold py-2 text-white"><a href="mailto:mzmarshall1278@gmail.com">&copy; Copyright Marshall Technologies 2024</a></div>
    </footer>
  )
}
