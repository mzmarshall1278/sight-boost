import { Metadata } from 'next';
import Image from 'next/image'
import React from 'react'


export const metadata: Metadata = {
    title: "Services | Sight Boost",
    description: "Our Services Page",
  };

export default function page() {
    return (
        <div className="w-5/6 mx-auto pb-12">
            <h1 className='text-center text-teal-900 mb-12 text-6xl font-semibold'>Our Services</h1>
            {/* clinic section */}
            <div className="">
                <h1 className='text-center mb-4 text-4xl text-teal-900 font-thin'>CLINICS</h1>
                <div className="flex justify-between">
                    <div className="text-black my-auto">
                        <h5 className='font-semibold  mt-4'>General</h5>
                        <p className="my-2">General Ophthalmology Clinic: 10am-4pm Daily </p>
                        <p className="my-2">General Consultation </p>
                        <p className="my-2">VIP Consultation  </p>


                        <p className='mb-2 font-semibold'>Speciality Clinics: </p>
                        <p className="mb-2">Glaucoma Clinic (Mondays) </p>
                        <p className="my-2">Medical Retina Clinic (Tuesdays)</p>
                        <p className="my-2">Paediatric/Squint Clinic (On request)</p>
                    </div>
                    <div className="relative w-1/2 h-72">
                        <Image src="/hero.jpg" alt="image" fill className='object-cover rounded-lg' />
                    </div>
                </div>
            </div>

            {/* Investigations section */}
            <div className="mt-16">
                <h1 className='text-center text-4xl text-teal-900 mb-4 font-thin'>INVESTIGATIONS</h1>
                <div className="flex justify-start gap-24">
                    <div className="relative w-2/3 h-96 my-auto">
                        <Image src="/eyescan.jpg" alt="image" fill className='object-cover rounded-lg' />
                    </div>
                    <div className="text-black my-auto text-left">

                        <p className="my-2">Visual Acuity Test</p>
                        <p className="my-2">Eye Pressure Test</p>
                        <p className="my-2">Automatic Glasses Test</p>
                        <p className="my-2">Eye Scan</p>
                        <p className="my-2">Retina Photo</p>
                        <p className="my-2">Retina Angiography </p>
                        <p className="my-2">Visual Fields Test</p>
                        <p className="my-2">Corneal Thickness Test </p>
                        <p className="my-2">OCT Tests</p>
                        <p className="my-2">IOL Calculation Test</p>
                        <p className="my-2">Blood Sugar Test </p>
                        <p className="my-2">Hepatitis Screening </p>
                        <p className="my-2">RVD Screening </p>
                        <p className="my-2"></p>
                    </div>
                </div>
            </div>

            {/* three */}
            <div className="grid grid-cols-3 gap-5 mt-24">

                <div className="col-span-1  border text-center bg-teal-900 text-white rounded-lg hover:shadow-xl shadow-black py-5">
                    <h1 className=' mb-4 text-4xl text-white font-thin'>SCREENING PROGRAMS</h1>
                    <p className="mb-2">General Eye Screening</p>
                    <p className="my-2">Glaucoma Screening</p>
                    <p className="my-2">Diabetic Eye Screening</p>
                    <p className="my-2">ROP Screening </p>
                </div>

                <div className="col-span-1  border text-center bg-teal-900 text-white rounded-lg hover:shadow-xl shadow-black py-5">
                    <h1 className=' mb-4 text-4xl text-white font-thin'>THEATRE SESSIONS</h1>
                    <p className="mb-2">Routine: Weekly</p>
                    <p className="my-2">Speciality Session: Phaco, Trab, Squint, Ptosis, Combined procedure </p>
                    <p className="my-2">VIP Session: On request </p>

                </div>

                <div className="col-span-1  border text-center bg-teal-900 text-white rounded-lg hover:shadow-xl shadow-black py-5">
                    <h1 className=' mb-4 text-4xl text-white font-thin'>LASER SESSIONS</h1>
                    <p className="mb-2">SLT for Glaucoma  </p>
                    <p className="my-2">Argon Laser for Diabetes </p>
                    <p className="my-2">YAG Laser Services </p>

                </div>

                <div className="col-span-1  border text-center h-full bg-teal-900 text-white rounded-lg hover:shadow-xl shadow-black py-5">
                    <h1 className=' mb-4 text-4xl text-white font-thin'>OPTOMETRY SERVICES</h1>
                    <p className="mb-2">Refraction for Adults </p>
                    <p className="my-2">Cycloplegic Refraction for Children </p>
                    <p className="my-2">Amblyopia Treatment</p>
                    <p className="my-2">Orthoptic Treatment</p>
                    <p className="my-2">Optical Contact Lens Fitting</p>
                </div>

                <div className="col-span-2 relative h-72 bg-teal-900 text-white rounded-lg hover:shadow-xl shadow-black py-5">
                    <Image src="/laser.jpg" alt="image" fill className="object-cover rounded-lg" />
                </div>

            </div>

            {/* optical */}

            <div className="mt-24">
                <h1 className='text-center mb-4 text-4xl text-teal-900 font-thin'>OPTICAL SERVICES</h1>
                <div className="flex justify-between">
                    <div className="text-black my-auto">
                        <p className="my-2">Male/Female/Unisex/Children Frames </p>
                        <p className="my-2">Designer Frames</p>
                        <p className="my-2">Assorted Frames </p>
                        <p className="my-2">Reader Frames</p>
                        <p className="my-2">Photochromic Lenses </p>
                        <p className="my-2">Original Blue Coat Lenses</p>
                        <p className="my-2">All Special Order Lenses </p>
                        <p className="my-2">Varilux </p>
                        <p className="my-2">Fused Bifocal</p>
                        <p className="my-2">Auto-Edging Machine Services</p>

                    </div>
                    <div className="relative w-2/3 h-72">
                        {/* <Image src="/glasses.jpg" alt="image" fill className='object-cover rounded-lg' /> */}
                        <Image src="/photo.png" alt="image" fill className='object-cover rounded-lg' />
                    </div>
                </div>
            </div>

            {/* consumables */}

            <div className="mt-24">
                <h1 className='text-center mb-4 text-4xl text-teal-900 font-thin'>Eyecare Consumables</h1>
                <div className="flex justify-between gap-8 w-full">
                    <div className="w-3/5 flex flex-col gap-3 my-auto border-2">
                        <div className="col-span-1 h-72 relative">
                            <Image src="/eyedrop.jpg" className='object-cover rounded-lg' alt="image" fill />
                        </div>
                        <div className="col-span-1 h-72 relative">
                            <Image src="/scleral.jpeg" className='object-cover rounded-lg' alt="image" fill />
                        </div>
                    </div>
                    <div className="text-black w-1/5">
                        <p className="my-2">Wholesale & Retail</p>
                        <p className="my-2">Rigid IOLs</p>
                        <p className="my-2">Foldable IOLs</p>
                        <p className="my-2">Visco Elastic Gel</p>
                        <p className="my-2">Crescent Blade</p>
                        <p className="my-2">Keratome Blade</p>
                        <p className="my-2">Lance Tip Blade</p>
                        <p className="my-2">Nylon 10-0 Suture</p>
                        <p className="my-2">Nylon 9-0 Suture</p>
                        <p className="my-2">Vicryl 10-0 Suture</p>
                        <p className="my-2">Vicryl 8-0 Suture</p>
                        <p className="my-2">Vicryl 6-0 Suture</p>
                        <p className="my-2">Prolene 10-0 Suture</p>
                        <p className="my-2">Prolene 8-0 Suture</p>
                        <p className="my-2">Silk 4-0 Suture</p>
                        <p className="my-2">Tryphan Blue</p>
                        <p className="my-2">Carbacol</p>
                        <p className="my-2">Disposable Eye Drapes</p>
                        <p className="my-2">Amethocaine Drops</p>
                        <p className="my-2">Phenylephrine/Tropicamide Drops</p>
                    </div>
                    <div className="text-black w-1/5">
                        <p className="my-2">Cyclopentolate Drops</p>
                        <p className="my-2">Povidone</p>
                        <p className="my-2">Methylated Spirit</p>
                        <p className="my-2">Cotton Gauze</p>
                        <p className="my-2">Cotton Wool</p>
                        <p className="my-2">Xylocaine/Adrenaline Injection</p>
                        <p className="my-2">Gentamicin Injection</p>
                        <p className="my-2">Dexamethasone Injection </p>
                        <p className="my-2">Adrenaline Injection</p>
                        <p className="my-2">Mitomycin-C Injection</p>
                        <p className="my-2">5-FlouroUracil Injection</p>
                        <p className="my-2">Vancomycin Injection</p>
                        <p className="my-2">Ceftazidime Injection</p>
                        <p className="my-2">Cefuroxime Injection</p>
                        <p className="my-2">Syringes</p>
                        <p className="my-2">Bandage Contact Lens</p>
                        <p className="my-2">Cosmetic Contact lens</p>
                        <p className="my-2">Conformer</p>
                        <p className="my-2">Scleral Shell</p>
                        <p className="my-2">Artificial Eye</p>
                        <p className="my-2">Orbital Implant</p>
                    </div>

                </div>
            </div>

            {/* eye pharmacy */}

            <div className="mt-16">
                <h1 className='text-center text-4xl text-teal-900 mb-4 font-thin'>EYE PHARMACY</h1>
                <div className="flex justify-start gap-24">
                    <div className="relative w-3/5 h-96 my-auto">
                        <Image src="/supl.jpg" alt="image" fill className='object-cover rounded-lg' />
                    </div>
                    <div className="text-black my-auto text-left">

                        <p className="my-2">Wholesale and Retail </p>
                        <p className="my-2">Antibiotics</p>
                        <p className="my-2">Steroids</p>
                        <p className="my-2">NSAIDs</p>
                        <p className="my-2">Anti-Glaucoma</p>
                        <p className="my-2">Anti-Allergics</p>
                        <p className="my-2">Anti-Fungal</p>
                        <p className="my-2">Tear Subtitutes</p>
                        <p className="my-2">Antioxidants</p>
                        <p className="my-2">Combination Drops</p>
                        <p className="my-2">Eye Supplements </p>
                        <p className="my-2">And many more...</p>
                    </div>
                </div>
            </div>

            {/* last */}

            <div className="my-24 relative h-full">
                <div className="p-8 text-white  bg-teal-900/70 backdrop-blur-md rounded-lg flex justify-between gap-2">
                    <div className="w-[55%]">
                        <h1 className='text-center text-4xl text-white mb-4 font-thin'>EYE CARE EQUIOMENTS</h1>
                        <div className=" flex justify-around">
                            <div className="">
                                <p className="my-2">Brand new & Fairly used</p>
                                <p className="my-2">VA Charts</p>
                                <p className="my-2">Pen Torch</p>
                                <p className="my-2">Corneal Loupe </p>
                                <p className="my-2">Ophthalmoscope </p>
                                <p className="my-2">Retinoscope </p>
                                <p className="my-2">Trial Lens Box</p>
                                <p className="my-2">Tonometers</p>
                                <p className="my-2">Operating Microscope</p>
                                <p className="my-2">Slit Lamp</p>
                                <p className="my-2">AutoRefractometre</p>
                                <p className="my-2">Bipolar Cautery Machine</p>
                                <p className="my-2">Visual Field Machine</p>
                                <p className="my-2">A-Scan Machine</p>
                            </div>
                            <div className="">
                                <p className="my-2">B-Scan Machine</p>
                                <p className="my-2">OCT Machine</p>
                                <p className="my-2">Laser Machine</p>
                                <p className="my-2">Phaco Machine</p>
                                <p className="my-2">Vitrectomy Machine </p>
                                <p className="my-2">Operating Bed</p>
                                <p className="my-2">Theatre Trolley</p>
                                <p className="my-2">Theatre Cabinet</p>
                                <p className="my-2">Theatre Couch</p>
                                <p className="my-2">Autoclave </p>
                                <p className="my-2">Hot air Sterilizer</p>
                                <p className="my-2">Steam Sterilizer</p>
                                <p className="my-2">Drip Stand</p>
                                <p className="my-2">Kick About Bin</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-[28rem] my-auto border-l-2 border-white"></div>
                    <div className="pl-6">
                        <h1 className='text-center text-4xl text-white mb-4 font-thin'>EYE CARE INSTRUMENTS</h1>
                        <p className="my-2">Stainless steel and Titanium</p>
                        <p className="my-2">Cataract Set</p>
                        <p className="my-2">Glaucoma Set </p>
                        <p className="my-2">Lid Set</p>
                        <p className="my-2">Squint Set</p>
                        <p className="my-2">Single Instruments</p>
                        <p className="my-2">Simcoe Cannula </p>
                        <p className="my-2">Sterilisation Tray</p>
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-full -z-20 flex justify-around h-full">
                    <div className="size-44 my-auto bg-[black] rounded-full glow"></div>
                    <div className="size-44 my-auto bg-[black] rounded-full glow"></div>
                    <div className="size-44 my-auto bg-[black] rounded-full glow"></div>
                </div>

            </div>

        </div>
    )
}



