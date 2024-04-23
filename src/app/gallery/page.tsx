import { Metadata } from 'next';
import Image from 'next/image'
import React from 'react'

export const metadata: Metadata = {
    title: "Gallery | Sight Boost",
    description: "View Our Gallery",
  };

export default function page() {
    return (
        <div className="  bg-gradient-to-br from-teal-900 via-black to-teal-900 -mt-12 pt-8">
            <div className='mx-auto w-5/6 pb-12'>
                <h1 className='text-center text-white mb-12 text-6xl font-semibold'>Our Gallery</h1>


                <section className='mb-24'>
                    <h1 className='text-center mb-4 text-4xl text-white font-thin'>FACILITY</h1>

                    <div className="grid grid-cols-5 gap-3 min-h-96">
                        <div className="col-span-2 row-span-2 rounded-lg bg-teal-900 relative">
                            <Image src="/view.jpg" fill alt='image' className='rounded-lg object-cover' />
                        </div>
                        <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
                            <Image src="/view.jpg" fill alt='image' className='rounded-lg object-cover' />
                        </div>
                        <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
                            <Image src="/view.jpg" fill alt='image' className='rounded-lg object-cover' />
                        </div>
                        <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
                            <Image src="/view.jpg" fill alt='image' className='rounded-lg object-cover' />
                        </div>
                        <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
                            <Image src="/view.jpg" fill alt='image' className='rounded-lg object-cover' />
                        </div>
                        <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
                            <Image src="/view.jpg" fill alt='image' className='rounded-lg object-cover' />
                        </div>
                        <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
                            <Image src="/view.jpg" fill alt='image' className='rounded-lg object-cover' />
                        </div>
                    </div>
                </section>

                <section className='mb-24'>
                    <h1 className='text-center mb-4 text-4xl text-white font-thin'>EQUIPMENTS</h1>

                    <div className="grid grid-cols-5 gap-3 min-h-96">
                        <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
                            <Image src="/lab.jpeg" fill alt='image' className='rounded-lg object-cover' />
                        </div>
                        <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
                            <Image src="/test2.jpg" fill alt='image' className='rounded-lg object-cover' />
                        </div>
                        <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
                            <Image src="/laser.jpg" fill alt='image' className='rounded-lg object-cover' />
                        </div>
                        <div className="col-span-2 row-span-2 rounded-lg bg-teal-900 relative">
                            <Image src="/laser2.jpg" fill alt='image' className='rounded-lg object-cover' />
                        </div>
                        <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
                            <Image src="/hero.jpg" fill alt='image' className='rounded-lg object-cover' />
                        </div>
                        <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
                            <Image src="/equipment1.jpg" fill alt='image' className='rounded-lg object-cover' />
                        </div>
                        <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
                            <Image src="/eyescan.jpg" fill alt='image' className='rounded-lg object-cover' />
                        </div>
                    </div>
                </section>

                <section className='mb-24'>
                    <h1 className='text-center mb-4 text-4xl text-white font-thin'>PRODUCTS AND CONSUMABLES</h1>

                    <div className="grid grid-cols-5 gap-3 min-h-96">
                        <div className="col-span-2 row-span-2 rounded-lg bg-teal-900 relative">
                            <Image src="/glasses.jpg" fill alt='image' className='rounded-lg object-cover' />
                        </div>
                        <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
                            <Image src="/scleral.jpeg" fill alt='image' className='rounded-lg object-cover' />
                        </div>
                        <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
                            <Image src="/photo.png" fill alt='image' className='rounded-lg object-cover' />
                        </div>
                        <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
                            <Image src="/eyedrop.jpg" fill alt='image' className='rounded-lg object-cover' />
                        </div>
                        <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
                            <Image src="/eyedrop.jpg" fill alt='image' className='rounded-lg object-cover' />
                        </div>
                        <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
                            <Image src="/scleral.jpeg" fill alt='image' className='rounded-lg object-cover' />
                        </div>
                        <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
                            <Image src="/photo.png" fill alt='image' className='rounded-lg object-cover' />
                        </div>
                    </div>
                </section>


                <section className='mb-24'>
                    <h1 className='text-center mb-4 text-4xl text-white font-thin'>SESSIONS AND SURGERY</h1>

                    <div className="grid grid-cols-5 gap-3 min-h-96">
                        <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
                            <Image src="/eyescan.jpg" fill alt='image' className='rounded-lg object-cover' />
                        </div>
                        <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
                            <Image src="/test2.jpg" fill alt='image' className='rounded-lg object-cover' />
                        </div>
                        <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
                            <Image src="/lab.jpeg" fill alt='image' className='rounded-lg object-cover' />
                        </div>
                        <div className="col-span-2 row-span-2 rounded-lg bg-teal-900 relative">
                            <Image src="/hero.jpg" fill alt='image' className='rounded-lg object-cover' />
                        </div>
                        <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
                            <Image src="/laser.jpg" fill alt='image' className='rounded-lg object-cover' />
                        </div>
                        <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
                            <Image src="/laser2.jpg" fill alt='image' className='rounded-lg object-cover' />
                        </div>
                        <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
                            <Image src="/view.jpg" fill alt='image' className='rounded-lg object-cover' />
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}
