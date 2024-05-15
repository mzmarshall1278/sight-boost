import Image from 'next/image'

export default function Hero() {
    return (
        <section className=" w-full mx-auto pl-6">
            <div className="lg:flex justify-between w-full relative">
                <div className=" h-full mb-4 lg:my-auto border-2 mx-auto">
                    <h1 className="text-[4rem] font-semibold text-teal-800 font-sans text-center">Sight Boost</h1>
                    <h3 className='mt-4 tracking-[0.45rem] text-center'>Passion For Excellence In Eye Care</h3>
                    {/* <button className='custom-btn'>learn more</button> */}
                </div>
                <div className="h-72 lg:h-96 lg:mt-6 mx-auto w-11/12 lg:w-3/5 relative rounded-full">
                    <Image src="/view.jpg" alt='hero' fill className='rounded-l-full object-cover' />
                </div>
            </div>
            

        </section>
    )
}
