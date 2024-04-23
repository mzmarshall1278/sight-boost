import React from 'react'
import facebook from '../../../public/svg/facebook.svg'
import twitter from '../../../public/svg/twitter.svg'
import instagram from '../../../public/svg/insta.svg'
import youtube from '../../../public/svg/youtube.svg'
import Image from 'next/image'

export default function Social() {
  return (
    <section className='my-24'>
      <h1 className="text-5xl font-semibold text-teal-900 text-center">Follow us on</h1>

      <div className="flex justify-center gap-8 mt-12 w-5/6 mx-auto">
        <a href='https://facebook.com' className="relative size-24 flex flex-col justify-center">
          <Image src={facebook} fill alt="icon" />
        </a>
        <a href='https://twitter.com' className="relative size-24 flex flex-col justify-center">
          <Image src={twitter} fill alt="icon" />
        </a>
        <a href='https://instagram.com' className="relative size-24 flex flex-col justify-center">
          <Image src={instagram} fill alt="icon" />
        </a>
        <a href='https://youtube.com' className="relative size-24 flex flex-col justify-center">
          <Image src={youtube} fill alt="icon" />
        </a>
      </div>
    </section>
  )
}
