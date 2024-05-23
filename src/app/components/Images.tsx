"use client"
import Image from "next/image";
import React, { useState } from "react";
import ImageLoader from "../components/ImageLoader";


export default function Images() {
const [currentImage, setCurrentImage] = useState("")
const [isOpen, setIsOpen] = useState(false)

function openImage (url: string) {
    setCurrentImage(url);
    setIsOpen(true)
}

  return (
    <div className="  bg-gradient-to-br from-teal-900 via-black to-teal-900 -mt-12 pt-8">
      { isOpen && <ImageLoader url={currentImage} close={()=> setIsOpen(false)} />}

      <div className="mx-auto w-5/6 pb-12">
        <h1 className="text-center text-white mb-12 text-6xl font-semibold">
          Our Gallery
        </h1>

        <section className="mb-24">
          <h1 className="text-center mb-4 text-2xl sm:text-4xl text-white font-thin">
            FACILITY
          </h1>

          <div className="grid grid-cols-5 gap-3 h-44 lg:min-h-96">
            <div className="col-span-2 row-span-2 rounded-lg bg-teal-900 relative">
              <Image
                onClick={() => openImage("https://ik.imagekit.io/23obkah80/IMG_4005.JPG?updatedAt=1716323188898")}
                src="https://ik.imagekit.io/23obkah80/IMG_4005.JPG?updatedAt=1716323188898"
                fill
                alt="image"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
              <Image
                onClick={() => openImage("https://ik.imagekit.io/23obkah80/IMG_3967.JPG?updatedAt=1716323235030")}
                src="https://ik.imagekit.io/23obkah80/IMG_3967.JPG?updatedAt=1716323235030"
                fill
                alt="image"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
              <Image
                onClick={() => openImage("https://ik.imagekit.io/23obkah80/IMG_3969.JPG?updatedAt=1716323233939")}
                src="https://ik.imagekit.io/23obkah80/IMG_3969.JPG?updatedAt=1716323233939"
                fill
                alt="image"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
              <Image
                onClick={() => openImage("https://ik.imagekit.io/23obkah80/IMG_4011.JPG?updatedAt=1716323165807")}
                src="https://ik.imagekit.io/23obkah80/IMG_4011.JPG?updatedAt=1716323165807"
                fill
                alt="image"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
              <Image
                onClick={() => openImage("https://ik.imagekit.io/23obkah80/IMG_3995.JPG?updatedAt=1716323189938")}
                src="https://ik.imagekit.io/23obkah80/IMG_3995.JPG?updatedAt=1716323189938"
                fill
                alt="image"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
              <Image
                onClick={() => openImage("https://ik.imagekit.io/23obkah80/IMG_4010.JPG?updatedAt=1716323168223")}
                src="https://ik.imagekit.io/23obkah80/IMG_4010.JPG?updatedAt=1716323168223"
                fill
                alt="image"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
              <Image
                onClick={() => openImage("https://ik.imagekit.io/23obkah80/IMG_3981.JPG?updatedAt=1716323202103")}
                src="https://ik.imagekit.io/23obkah80/IMG_3981.JPG?updatedAt=1716323202103"
                fill
                alt="image"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mb-24">
          <h1 className="text-center mb-4 text-2xl sm:text-4xl text-white font-thin">
            EQUIPMENTS
          </h1>

          <div className="grid grid-cols-5 gap-3 h-44 lg:min-h-[30rem]">
            <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
              <Image
                onClick={() => openImage("https://ik.imagekit.io/23obkah80/IMG_3972.JPG?updatedAt=1716323230756")}
                src="https://ik.imagekit.io/23obkah80/IMG_3972.JPG?updatedAt=1716323230756"
                fill
                alt="image"
                className="rounded-lg object-cover object"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
              <Image
                onClick={() => openImage("https://ik.imagekit.io/23obkah80/IMG_3974.JPG?updatedAt=1716323222795")}
                src="https://ik.imagekit.io/23obkah80/IMG_3974.JPG?updatedAt=1716323222795"
                fill
                alt="image"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
              <Image
                onClick={() => openImage("https://ik.imagekit.io/23obkah80/IMG_3977.JPG?updatedAt=1716323230531")}
                src="https://ik.imagekit.io/23obkah80/IMG_3977.JPG?updatedAt=1716323230531"
                fill
                alt="image"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="col-span-2 row-span-2 rounded-lg bg-teal-900 relative">
              <Image
                onClick={() => openImage("https://ik.imagekit.io/23obkah80/IMG_4001.JPG?updatedAt=1716323175241")}
                src="https://ik.imagekit.io/23obkah80/IMG_4001.JPG?updatedAt=1716323175241"
                fill
                alt="image"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
              <Image
                onClick={() => openImage("https://ik.imagekit.io/23obkah80/msg7099600018-13207.jpg?updatedAt=1716323132454")}
                src="https://ik.imagekit.io/23obkah80/msg7099600018-13207.jpg?updatedAt=1716323132454"
                fill
                alt="image"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
              <Image
                onClick={() => openImage("https://ik.imagekit.io/23obkah80/msg7099600018-13206.jpg?updatedAt=1716323132712")}
                src="https://ik.imagekit.io/23obkah80/msg7099600018-13206.jpg?updatedAt=1716323132712"
                fill
                alt="image"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
              <Image
                onClick={() => openImage("https://ik.imagekit.io/23obkah80/msg7099600018-13216.jpg?updatedAt=1716323128915")}
                src="https://ik.imagekit.io/23obkah80/msg7099600018-13216.jpg?updatedAt=1716323128915"
                fill
                alt="image"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mb-24">
          <h1 className="text-center mb-4 text-2xl sm:text-4xl text-white font-thin">
            PRODUCTS AND CONSUMABLES
          </h1>

          <div className="grid grid-cols-5 gap-3 h-44 lg:min-h-96">
            <div className="col-span-2 row-span-2 rounded-lg bg-teal-900 relative">
              <Image
                onClick={() => openImage("https://ik.imagekit.io/23obkah80/IMG_3990.JPG?updatedAt=1716323194652")}
                src="https://ik.imagekit.io/23obkah80/IMG_3990.JPG?updatedAt=1716323194652"
                fill
                alt="image"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
              <Image
                onClick={() => openImage("https://ik.imagekit.io/23obkah80/IMG_4014.JPG?updatedAt=1716323170409")}
                src="https://ik.imagekit.io/23obkah80/IMG_4014.JPG?updatedAt=1716323170409"
                fill
                alt="image"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
              <Image
                onClick={() => openImage("https://ik.imagekit.io/23obkah80/msg7099600018-13165.jpg?updatedAt=1716323140875")}
                src="https://ik.imagekit.io/23obkah80/msg7099600018-13165.jpg?updatedAt=1716323140875"
                fill
                alt="image"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
              <Image
                onClick={() => openImage("https://ik.imagekit.io/23obkah80/msg7099600018-13173.jpg?updatedAt=1716323138706")}
                src="https://ik.imagekit.io/23obkah80/msg7099600018-13173.jpg?updatedAt=1716323138706"
                fill
                alt="image"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
              <Image
                onClick={() => openImage("https://ik.imagekit.io/23obkah80/IMG_4015.JPG?updatedAt=1716323160233")}
                src="https://ik.imagekit.io/23obkah80/IMG_4015.JPG?updatedAt=1716323160233"
                fill
                alt="image"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
              <Image
                onClick={() => openImage("https://ik.imagekit.io/23obkah80/msg7099600018-13166.jpg?updatedAt=1716323140122")}
                src="https://ik.imagekit.io/23obkah80/msg7099600018-13166.jpg?updatedAt=1716323140122"
                fill
                alt="image"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
              <Image
                onClick={() => openImage("https://ik.imagekit.io/23obkah80/msg7099600018-13188.jpg?updatedAt=1716323137190")}
                src="https://ik.imagekit.io/23obkah80/msg7099600018-13188.jpg?updatedAt=1716323137190"
                fill
                alt="image"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mb-24">
          <h1 className="text-center mb-4 text-2xl sm:text-4xl text-white font-thin">
            SESSIONS AND SURGERY
          </h1>

          <div className="grid grid-cols-5 gap-3 h-44 lg:min-h-96">
            <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
              <Image
              onClick={()=> openImage("https://ik.imagekit.io/23obkah80/msg7099600018-13220.jpg?updatedAt=1716323128933")}
                src="https://ik.imagekit.io/23obkah80/msg7099600018-13220.jpg?updatedAt=1716323128933"
                fill
                alt="image"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
              <Image
              onClick={()=> openImage("https://ik.imagekit.io/23obkah80/msg7099600018-13221.jpg?updatedAt=1716323127718")}
                src="https://ik.imagekit.io/23obkah80/msg7099600018-13221.jpg?updatedAt=1716323127718"
                fill
                alt="image"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
              <Image
              onClick={()=> openImage("https://ik.imagekit.io/23obkah80/msg7099600018-13208.jpg?updatedAt=1716323132865")}
                src="https://ik.imagekit.io/23obkah80/msg7099600018-13208.jpg?updatedAt=1716323132865"
                fill
                alt="image"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="col-span-2 row-span-2 rounded-lg bg-teal-900 relative">
              <Image
              onClick={()=> openImage("https://ik.imagekit.io/23obkah80/msg7099600018-13214.jpg?updatedAt=1716323131121")}
                src="https://ik.imagekit.io/23obkah80/msg7099600018-13214.jpg?updatedAt=1716323131121"
                fill
                alt="image"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
              <Image
              onClick={()=> openImage("https://ik.imagekit.io/23obkah80/msg7099600018-13213.jpg?updatedAt=1716323131459")}
                src="https://ik.imagekit.io/23obkah80/msg7099600018-13213.jpg?updatedAt=1716323131459"
                fill
                alt="image"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
              <Image
              onClick={()=> openImage("https://ik.imagekit.io/23obkah80/msg7099600018-13210.jpg?updatedAt=1716323132916")}
                src="https://ik.imagekit.io/23obkah80/msg7099600018-13210.jpg?updatedAt=1716323132916"
                fill
                alt="image"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg bg-teal-900 relative">
              <Image
              onClick={()=> openImage("https://ik.imagekit.io/23obkah80/IMG_3985.JPG?updatedAt=1716323215352")}
                src="https://ik.imagekit.io/23obkah80/IMG_3985.JPG?updatedAt=1716323215352"
                fill
                alt="image"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
