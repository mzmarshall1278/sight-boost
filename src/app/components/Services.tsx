import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Services() {
    return (
        <section className='w-11/12 lg:w-2/3 mx-auto my-24'>
            <h1 className="text-5xl text-teal-800 font-semibold text-center">Our Services</h1>
            <div className="flex gap-5 mt-8 justify-between">

                <ul className='text-white gap-3 text-xl justify-around text-center grid grid-cols-2 md:grid-cols-3 mx-auto'>
                    <li className=' col-span-1 rounded-lg h-24 md:h-28 w-44 md:w-56 flex flex-col justify-center py-2 px-4 bg-gradient-to-br from-teal-900 to-black mb-2  '>CLINICS</li>
                    <li className=' col-span-1 rounded-lg h-24 md:h-28 w-44 md:w-56 flex flex-col justify-center py-2 px-4 bg-gradient-to-b from-teal-900 to-black mb-2 '>INVESTIGATIONS</li>
                    <li className=' col-span-1 rounded-lg h-24 md:h-28 w-44 md:w-56 flex flex-col justify-center py-2 px-4 bg-gradient-to-bl from-teal-900 to-black mb-2 '>SCREENING PROGRAMS</li>
                    <li className=' col-span-1 rounded-lg h-24 md:h-28 w-44 md:w-56 flex flex-col justify-center py-2 px-4 bg-gradient-to-r from-teal-900 to-black mb-2 '>THEATRE SESSIONS</li>
                    <li className=' col-span-1 rounded-lg h-24 md:h-28 w-44 md:w-56 flex flex-col justify-center py-2 px-4 bg-black mb-2 '>LASER SESSIONS</li>
                    <li className=' col-span-1 rounded-lg h-24 md:h-28 w-44 md:w-56 flex flex-col justify-center py-2 px-4 bg-gradient-to-l from-teal-900 to-black mb-2 '>OPTOMETRY SERVICES</li>
                    <li className=' col-span-1 rounded-lg h-24 md:h-28 w-44 md:w-56 flex flex-col justify-center py-2 px-4 bg-gradient-to-tr from-teal-900 to-black mb-2 '>OPTICAL SERVICES</li>
                    <li className=' col-span-1 rounded-lg h-24 md:h-28 w-44 md:w-56 flex flex-col justify-center py-2 px-4 bg-gradient-to-t from-teal-900 to-black mb-2 '>EYE CARE CONSUMABLES</li>
                    <Link href="/services" className=' col-span-1 rounded-lg h-24 w-44 md:h-28 md:w-56 flex flex-col justify-center py-2 px-4 bg-gradient-to-tl from-teal-900 to-black mb-2 hover:bg-teal-700'>And Many More ...</Link>
                </ul>
            </div>
        </section>
    )
}
