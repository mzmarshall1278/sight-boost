"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Header() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex justify-between bg-teal-900 fixed top-0 w-full z-50 py-4 text-white px-2">
      <h1 className="text-2xl w-1/2 sm:w-1/3 text-center font-semibold">
        Sight Boost
      </h1>

      <div className="block sm:hidden" onClick={()=> setIsOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      <ul className="hidden sm:flex justify-around w-[55%] sm:w-1/2 my-auto">
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
      {isOpen && (<>
        <div className="bg-slate-900 w-screen h-full fixed opacity-70 top-0 right-0 p-5 z-40 sm:hidden overflow-y-clip">
        </div>

        <div className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-all ease-in-out duration-300 text-white sm:hidden flex flex-col justify-start gap-8 fixed glass top-0 right-0 h-full z-50 w-1/2`}>

          <ul className='w-3/5 mx-auto mt-8'>
            <Link href="/"><li onClick={() => setIsOpen(false)} className='my-6 hover:underline'>Home</li></Link>
            <Link href="/services"><li onClick={() => setIsOpen(false)} className='my-6 hover:underline'>Services</li></Link>
            <Link href="/gallery"><li onClick={() => setIsOpen(false)} className='my-6 hover:underline'>Gallery</li></Link>
            <Link href="/about"><li onClick={() => setIsOpen(false)} className='my-6 hover:underline'>About</li></Link>
          </ul>

          <div className="flex justify-center mb-16">
            <svg onClick={() => setIsOpen(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>

          </div>
        </div>
      </>)}
    </nav>
  );
}
