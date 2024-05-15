import Image from 'next/image'
import React from 'react'

export default function Testimonials() {
    return (
        <section className='w-11/12 text-center mx-auto mb-24'>
            <h1 className='text-5xl text-teal-900 text-center font-semibold'>Testimonials</h1>
            <p className="mt-12">What our patients are saying:</p>
            <div className="flex justify-center">
                <div className="my-auto rounded-full size-10 bg-teal-900 text-white cusror-pointer text-center flex flex-col justify-center cursor-pointer hover:scale-110 transition-all duration-150">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mx-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                    </svg>

                </div>
                <div className="mt-10 w-2/3">
                    <div className="size-32 relative mx-auto mb-4">
                        <Image src="/sailor.png" fill alt='image' className='object-cover rounded-lg' />
                    </div>
                    
                </div>
                <div className="my-auto rounded-full size-10 bg-teal-900 text-white cusror-pointer text-center flex flex-col justify-center cursor-pointer hover:scale-110 transition-all duration-150">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mx-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>



                </div>
            </div>
            <div className="text-center w-4/5 md:w-3/5 mx-auto text-teal-900">
                        <p className="">I was struggling with itchy eyes and poor vision. I could barely sail my ship. But after I my Operation the itching stopped and the vision inproved.</p>
                        <p className='text-right font-semibold mt-2'>-Jack Sparrow</p>
                    </div>
        </section>
    )
}
