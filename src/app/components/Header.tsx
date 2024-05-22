import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <nav className='flex justify-between bg-teal-900 fixed top-0 w-full z-40 py-4 text-white px-2'>
      <h1 className="text-2xl w-1/3 text-center font-semibold">Sight Boost</h1>

      <ul className='flex justify-around w-[55%] sm:w-1/2 my-auto'>
        <Link href="/" className="hover:border-b border-white">
          <li className="">Home</li>
        </Link>
        <Link href="/services" className="hover:border-b border-white">
          <li className="">Services</li>
        </Link>
        <Link href="/gallery" className="hover:border-b border-white">
          <li className="">Gallery</li>
        </Link>
        <Link href="/about" className="hover:border-b border-white">
          <li className="">About</li>
        </Link>
      </ul>
    </nav>
  )
}
