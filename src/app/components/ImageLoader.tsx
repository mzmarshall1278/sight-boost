import Image from 'next/image'
import React from 'react'

export default function ImageLoader({url, close}: {url: string, close: ()=> void}) {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 z-40 flex flex-col justify-between align-middle my-auto p-4 sm:p-24 bg-slate-800/90">
        <div className="absolute top-8 w-full z-20" onClick={()=> close()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-12 text-white border border-white rounded-full p-2 mx-auto cursor-pointer hover:bg-green-900"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="w-full h-full relative">
          <Image
            src={url}
            fill
            alt="image"
            className="rounded-lg object-contain"
          />
        </div>
      </div>
  )
}
