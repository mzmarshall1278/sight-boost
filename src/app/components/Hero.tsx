import React from 'react'
import ShapeGrid from './ShapeGrid'
import Image from 'next/image'

export default function Hero() {
    return (
        <section className=" w-full mx-auto pl-6">
            <div className="flex justify-between w-full relative">
                <div className=" h-full my-auto border-2 mx-auto">
                    <h1 className="text-[4rem] font-semibold text-teal-800 font-sans">SIGHT BOOST</h1>
                    <h3 className='mt-4 tracking-[0.65rem] text-center'>sight at its best</h3>
                    {/* <button className='custom-btn'>learn more</button> */}
                </div>
                <div className="h-96 w-3/5 relative rounded-full">
                    <Image src="/view.jpg" alt='hero' fill className='rounded-l-full object-cover' />
                </div>
            </div>
            

        </section>
    )
}
