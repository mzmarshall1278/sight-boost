import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Gallery() {
  return (
    <section className='mt-24 bg-teal-900 py-12 lg:py-28'>
     <div className="lg:flex justify-between  w-11/12 mx-auto">
      <h1 className="text-white font-semibold text-4xl mb-6 md:text-5xl lg:w-1/4 lg:my-auto">View Our Gallery</h1>

      <div className="grid grid-cols-4 gap-2 grid-rows-6 w-full lg:w-3/4 h-72 lg:h-96">
        <div className="col-span-1 row-span-3 relative hover:scale-110 hover:z-20 transition-all duration-400 ">
          <div className="absolute top-0 left-0 size-full bg-black/50 hover:bg-transparent z-10 cursor-pointer rounded-lg"></div>
          <Image src="/equipment1.jpg" fill alt="image" className='object-cover rounded-lg' />
        </div>
        <div className="relative col-span-1 row-span-2 hover:scale-110 hover:z-20 transition-all duration-400 ">
          <div className="absolute top-0 left-0 size-full bg-black/50 hover:bg-transparent z-10 cursor-pointer rounded-lg"></div>
        <Image src="/laser2.jpg" fill alt="image" className='object-cover rounded-lg' />
        </div>
        <div className="relative col-span-1 row-span-2 hover:scale-110 hover:z-20 transition-all duration-400 ">
          <div className="absolute top-0 left-0 size-full bg-black/50 hover:bg-transparent z-10 cursor-pointer rounded-lg"></div>
        <Image src="/laser.jpg" fill alt="image" className='object-cover rounded-lg' />
        </div>
        <div className="relative col-span-1 row-span-3 hover:scale-110 hover:z-20 transition-all duration-400 ">
          <div className="absolute top-0 left-0 size-full bg-black/50 hover:bg-transparent z-10 cursor-pointer rounded-lg"></div>
          <Image src="/glasses.jpg" fill alt="image" className='object-cover rounded-lg' />
        </div>
        <div className="relative col-span-2 row-span-4 hover:scale-110 hover:z-20 transition-all duration-400 ">
          <div className="absolute top-0 left-0 size-full bg-black/50 hover:bg-transparent z-10 cursor-pointer rounded-lg"></div>
          <Image src="/test2.jpg" fill alt="image" className='object-cover rounded-lg' />
        </div>
        <div className="relative col-span-1 row-span-3 hover:scale-110 hover:z-20 transition-all duration-400 ">
          <div className="absolute top-0 left-0 size-full bg-black/50 hover:bg-transparent z-10 cursor-pointer rounded-lg"></div>
          <Image src="/hero.jpg" fill alt="image" className='object-cover rounded-lg' />
        </div>
        <div className="relative col-span-1 row-span-3 hover:scale-110 hover:z-20 transition-all duration-400 ">
          <div className="absolute top-0 left-0 size-full bg-black/50 hover:bg-transparent z-10 cursor-pointer rounded-lg"></div>
          <Image src="/lab.jpeg" fill alt="image" className='object-cover rounded-lg' />
        </div>
      </div>
     </div>
     <Link href="/gallery" className="block text-center font-semibold w-2/3 mx-auto border mt-12 hover:text-teal-900 hover:bg-white border-white text-white rounded-full py-2 transition-colors duration-200">View</Link>
    </section>
  )
}
