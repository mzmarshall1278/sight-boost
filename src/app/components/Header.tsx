import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <nav className='flex justify-between bg-teal-950 fixed top-0 w-full z-40 py-4 text-white'>
      <h1 className="text-2xl w-1/3 text-center font-semibold">Sight Boost</h1>

      <ul className='flex justify-around w-1/2 my-auto'>
        <Link href="/">
          <li className="">Home</li>
        </Link>
        <Link href="/services">
          <li className="">Services</li>
        </Link>
        <Link href="/gallery">
          <li className="">Gallery</li>
        </Link>
        <Link href="/contact">
          <li className="">Contact</li>
        </Link>
        <Link href="/about">
          <li className="">About</li>
        </Link>
      </ul>
    </nav>
  )
}
