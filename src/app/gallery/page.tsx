import { Metadata } from "next";
import Image from "next/image";
import ImageLoader from "../components/ImageLoader";
import Images from "../components/Images";

export const metadata: Metadata = {
  title: "Gallery | Sight Boost",
  description: "View Our Gallery",
};

export default function page() {

  return (
   <Images/>
  );
}
