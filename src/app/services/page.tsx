import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Services | Sight Boost",
  description: "Our Services Page",
};

export default function page() {
  return (
    <div className="w-5/6 mx-auto pb-12">
      <h1 className="text-center text-teal-900 mb-12 text-4xl md:text-6xl font-semibold">
        Our Services
      </h1>
      {/* clinic section */}
      <div className="">
                <h1 className='text-center mb-4 text-4xl text-teal-900 font-thin'>CLINICS</h1>
                <div className="flex justify-between">
                    <div className="text-black my-auto">
                        <h5 className='font-semibold  mt-4'>General</h5>
                        <li className="my-2">General Ophthalmology Clinic: 10am-4pm Daily </li>
                        <li className="my-2">General Consultation </li>
                        <li className="my-2">VIP Consultation  </li>


                        <li className='mb-2 font-semibold'>Speciality Clinics: </li>
                        <li className="mb-2">Glaucoma Clinic (Mondays) </li>
                        <li className="my-2">Medical Retina Clinic (Tuesdays)</li>
                        <li className="my-2">Paediatric/Squint Clinic (On request)</li>
                    </div>
                    <div className="absolute -z-10 blur-xl sm:blur-none w-fit sm:relative sm:w-1/2 h-96">
                        <Image src="https://ik.imagekit.io/23obkah80/msg7099600018-13219.jpg?updatedAt=1716323128871" alt="image" fill className='object-cover rounded-lg' />
                    </div>
                </div>
            </div>

      {/* Investigations section */}
      <div className="mt-16">
                <h1 className='text-center text-4xl text-teal-900 mb-4 font-thin'>INVESTIGATIONS</h1>
                <div className="flex justify-start gap-24">
                    <div className="absolute -z-10 blur-xl sm:blur-none sm:relative w-fit sm:w-2/3 h-96 my-auto">
                        <Image src="https://ik.imagekit.io/23obkah80/msg7099600018-13221.jpg?updatedAt=1716323127718" alt="image" fill className='object-cover rounded-lg' />
                    </div>
                    <div className="text-black my-auto text-left">

                        <li className="my-2">Visual Acuity Test</li>
                        <li className="my-2">Eye Pressure Test</li>
                        <li className="my-2">Automatic Glasses Test</li>
                        <li className="my-2">Eye Scan</li>
                        <li className="my-2">Retina Photo</li>
                        <li className="my-2">Retina Angiography </li>
                        <li className="my-2">Visual Fields Test</li>
                        <li className="my-2">Corneal Thickness Test </li>
                        <li className="my-2">OCT Tests</li>
                        <li className="my-2">IOL Calculation Test</li>
                        <li className="my-2">Blood Sugar Test </li>
                        <li className="my-2">Hepatitis Screening </li>
                        <li className="my-2">RVD Screening </li>
                        <li className="my-2"></li>
                    </div>
                </div>
            </div>

      {/* three */}
      <div className="sm:grid grid-cols-3 gap-5 mt-24">
        <div className="col-span-1  border text-center bg-teal-900 text-white rounded-lg hover:shadow-xl shadow-black py-5 px-3">
          <h1 className=" mb-4 text-2xl md:text-4xl text-white font-thin">
            SCREENING PROGRAMS
          </h1>
          <li className="mb-2">General Eye Screening</li>
          <li className="my-2">Glaucoma Screening</li>
          <li className="my-2">Diabetic Eye Screening</li>
          <li className="my-2">ROP Screening </li>
        </div>

        <div className="col-span-1  border text-center bg-teal-900 text-white rounded-lg hover:shadow-xl shadow-black py-5 px-3">
          <h1 className=" mb-4 text-2xl md:text-4xl text-white font-thin">
            THEATRE SESSIONS
          </h1>
          <li className="mb-2">Routine: Weekly</li>
          <li className="my-2 w-3/4 mx-auto sm:full">
            Speciality Session: Phaco, Trab, Squint, Ptosis, Combined procedure{" "}
          </li>
          <li className="my-2">VIP Session: On request </li>
        </div>

        <div className="col-span-1  border text-center bg-teal-900 text-white rounded-lg hover:shadow-xl shadow-black py-5 px-3">
          <h1 className=" mb-4 text-2xl md:text-4xl text-white font-thin">
            LASER SESSIONS
          </h1>
          <li className="mb-2">SLT for Glaucoma </li>
          <li className="my-2">Argon Laser for Diabetes </li>
          <li className="my-2">YAG Laser Services </li>
        </div>

        <div className="col-span-1  border text-center h-full bg-teal-900 text-white rounded-lg hover:shadow-xl shadow-black py-5 px-3">
          <h1 className=" mb-4 text-2xl md:text-4xl text-white font-thin">
            OPTOMETRY SERVICES
          </h1>
          <li className="mb-2">Refraction for Adults </li>
          <li className="my-2">Cycloplegic Refraction for Children </li>
          <li className="my-2">Amblyopia Treatment</li>
          <li className="my-2">Orthoptic Treatment</li>
          <li className="my-2">Optical Contact Lens Fitting</li>
        </div>

        <div className="col-span-2 relative h-72 bg-teal-900 text-white rounded-lg hover:shadow-xl shadow-black py-5">
          <Image
            src="https://ik.imagekit.io/23obkah80/msg7099600018-13168.jpg?updatedAt=1716323139800"
            alt="image"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* optical */}

      <div className="mt-24">
        <h1 className="text-center mb-4 text-4xl text-teal-900 font-thin">
          OPTICAL SERVICES
        </h1>
        <div className="flex justify-between">
          <div className="text-black my-auto">
            <li className="my-2">Male/Female/Unisex/Children Frames </li>
            <li className="my-2">Designer Frames</li>
            <li className="my-2">Assorted Frames </li>
            <li className="my-2">Reader Frames</li>
            <li className="my-2">Photochromic Lenses </li>
            <li className="my-2">Original Blue Coat Lenses</li>
            <li className="my-2">All Special Order Lenses </li>
            <li className="my-2">Varilux </li>
            <li className="my-2">Fused Bifocal</li>
            <li className="my-2">Auto-Edging Machine Services</li>
          </div>
          <div className="absolute sm:relative w-fit -z-10 blur-xl sm:blur-none sm:w-[55%]  h-96">
            <Image
              src="https://ik.imagekit.io/23obkah80/IMG_4002.JPG?updatedAt=1716353842395"
              alt="image"
              fill
              className="object-cover rounded-lg "
            />
          </div>
        </div>
      </div>

      {/* consumables */}

      <div className="mt-24">
        <h1 className="text-center mb-4 text-4xl text-teal-900 font-thin">
          Eyecare Consumables
        </h1>
        <div className="flex justify-between gap-8 w-full">
          <div className="w-3/5 hidden sm:flex flex-col gap-3 my-auto border-2">
            <div className="col-span-1 h-72 relative">
              <Image
                src="https://ik.imagekit.io/23obkah80/msg7099600018-13187.jpg?updatedAt=1716323137627"
                className="object-cover rounded-lg"
                alt="image"
                fill
              />
            </div>
            <div className="col-span-1 h-72 relative">
              <Image
                src="https://ik.imagekit.io/23obkah80/msg7099600018-13188.jpg?updatedAt=1716323137190"
                className="object-cover rounded-lg"
                alt="image"
                fill
              />
            </div>
          </div>{" "}
          <div className="text-black w-1/2 sm:w-1/5">
            <li className="my-2">Wholesale & Retail</li>
            <li className="my-2">Rigid IOLs</li>
            <li className="my-2">Foldable IOLs</li>
            <li className="my-2">Visco Elastic Gel</li>
            <li className="my-2">Crescent Blade</li>
            <li className="my-2">Keratome Blade</li>
            <li className="my-2">Lance Tip Blade</li>
            <li className="my-2">Nylon 10-0 Suture</li>
            <li className="my-2">Nylon 9-0 Suture</li>
            <li className="my-2">Vicryl 10-0 Suture</li>
            <li className="my-2">Vicryl 8-0 Suture</li>
            <li className="my-2">Vicryl 6-0 Suture</li>
            <li className="my-2">Prolene 10-0 Suture</li>
            <li className="my-2">Prolene 8-0 Suture</li>
            <li className="my-2">Silk 4-0 Suture</li>
            <li className="my-2">Tryphan Blue</li>
            <li className="my-2">Carbacol</li>
            <li className="my-2">Disposable Eye Drapes</li>
            <li className="my-2">Amethocaine Drops</li>
            <li className="my-2">Phenylephrine/ Tropicamide Drops</li>
            <li className="my-2">Cyclopentolate Drops</li>
          </div>{" "}
          <div className="text-black w-1/2 sm:w-1/5">
            <li className="my-2">Povidone</li>
            <li className="my-2">Methylated Spirit</li>
            <li className="my-2">Cotton Gauze</li>
            <li className="my-2">Cotton Wool</li>
            <li className="my-2">Xylocaine/ Adrenaline Injection</li>
            <li className="my-2">Gentamicin Injection</li>
            <li className="my-2">Dexamethasone Injection </li>
            <li className="my-2">Adrenaline Injection</li>
            <li className="my-2">Mitomycin-C Injection</li>
            <li className="my-2">5-FlouroUracil Injection</li>
            <li className="my-2">Vancomycin Injection</li>
            <li className="my-2">Ceftazidime Injection</li>
            <li className="my-2">Cefuroxime Injection</li>
            <li className="my-2">Syringes</li>
            <li className="my-2">Bandage Contact Lens</li>
            <li className="my-2">Cosmetic Contact lens</li>
            <li className="my-2">Conformer</li>
            <li className="my-2">Scleral Shell</li>
            <li className="my-2">Artificial Eye</li>
            <li className="my-2">Orbital Implant</li>
          </div>
        </div>
      </div>

      {/* eye pharmacy */}

      <div className="mt-16">
        <h1 className="text-center text-4xl text-teal-900 mb-4 font-thin">
          EYE PHARMACY
        </h1>
        <div className="flex justify-start gap-4 sm:gap-24">
          <div className="relative w-3/5 h-96 my-auto">
            <Image
              src="https://ik.imagekit.io/23obkah80/IMG_3990.JPG?updatedAt=1716323194652&tr=w-1080%2Ch-1350%2Cfo-auto"
              alt="image"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="text-black my-auto text-left">
            <li className="my-2">Wholesale and Retail </li>
            <li className="my-2">Antibiotics</li>
            <li className="my-2">Steroids</li>
            <li className="my-2">NSAIDs</li>
            <li className="my-2">Anti-Glaucoma</li>
            <li className="my-2">Anti-Allergics</li>
            <li className="my-2">Anti-Fungal</li>
            <li className="my-2">Tear Subtitutes</li>
            <li className="my-2">Antioxidants</li>
            <li className="my-2">Combination Drops</li>
            <li className="my-2">Eye Supplements </li>
            <li className="my-2">And many more...</li>
          </div>
        </div>
      </div>

      {/* last */}

      <div className="my-16 md:my-24 relative h-full">
        <div className="p-8 text-white bg-teal-900 md:bg-teal-900/70 backdrop-blur-md rounded-lg flex flex-col md:flex-row justify-between gap-2">
          <div className="w-full md:w-[55%]">
            <h1 className="text-center text-2xl md:text-4xl text-white mb-4 font-thin">
              EYE CARE EQUIPMENTS
            </h1>
            <div className=" flex flex-col md:flex-row justify-around">
              <div className="">
                <li className="my-2">Brand new & Fairly used</li>
                <li className="my-2">VA Charts</li>
                <li className="my-2">Pen Torch</li>
                <li className="my-2">Corneal Loupe </li>
                <li className="my-2">Ophthalmoscope </li>
                <li className="my-2">Retinoscope </li>
                <li className="my-2">Trial Lens Box</li>
                <li className="my-2">Tonometers</li>
                <li className="my-2">Operating Microscope</li>
                <li className="my-2">Slit Lamp</li>
                <li className="my-2">AutoRefractometre</li>
                <li className="my-2">Bipolar Cautery Machine</li>
                <li className="my-2">Visual Field Machine</li>
                <li className="my-2">A-Scan Machine</li>
              </div>
              <div className="">
                <li className="my-2">B-Scan Machine</li>
                <li className="my-2">OCT Machine</li>
                <li className="my-2">Laser Machine</li>
                <li className="my-2">Phaco Machine</li>
                <li className="my-2">Vitrectomy Machine </li>
                <li className="my-2">Operating Bed</li>
                <li className="my-2">Theatre Trolley</li>
                <li className="my-2">Theatre Cabinet</li>
                <li className="my-2">Theatre Couch</li>
                <li className="my-2">Autoclave </li>
                <li className="my-2">Hot air Sterilizer</li>
                <li className="my-2">Steam Sterilizer</li>
                <li className="my-2">Drip Stand</li>
                <li className="my-2">Kick About Bin</li>
              </div>
            </div>
          </div>
          <div className="h-[28rem] my-auto border-l-2 border-white hidden md:block"></div>
          <div className="md:pl-6 mt-8 sm:mt-0">
            <h1 className="md:text-center text-2xl md:text-4xl text-white mb-4 font-thin">
              EYE CARE INSTRUMENTS
            </h1>
            <li className="my-2">Stainless steel and Titanium</li>
            <li className="my-2">Cataract Set</li>
            <li className="my-2">Glaucoma Set </li>
            <li className="my-2">Lid Set</li>
            <li className="my-2">Squint Set</li>
            <li className="my-2">Single Instruments</li>
            <li className="my-2">Simcoe Cannula </li>
            <li className="my-2">Sterilisation Tray</li>
          </div>
        </div>
        <div className="hidden absolute top-0 left-0 w-full -z-20 md:flex justify-around h-full ">
          <div className="size-44 my-auto rounded-full  relative">
            <Image src="/logo.png" fill className="object-contain" alt="logo" />
          </div>
          <div className="size-44 my-auto rounded-full  relative">
            <Image src="/logo.png" fill className="object-contain" alt="logo" />
          </div>
          <div className="size-44 my-auto rounded-full  relative">
            <Image src="/logo.png" fill className="object-contain" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
