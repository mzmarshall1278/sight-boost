import Image from "next/image";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Social from "./components/Social";
import Staff from "./components/Staff";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sight Boost",
  description: "Eye Care At Its Best",
};

export default function Home() {
  return (
   <div className="">
    <Hero/>
    <AboutUs/>
    <Services />
    <Testimonials/>
    <Gallery/>
    <Staff/>
    <Social/>
   </div>  );
}
