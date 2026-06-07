"use client";

import { FiFastForward } from "react-icons/fi";
import Button from "../UI/button";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden">
        <div id="hero-section" className="container mx-auto h-screen flex">
        <div className="relative self-center">
             <Image src="/images/img-basketball.svg" 
              width={423} height={423}
              alt="image bola"
              className="grayscale absolute left-5 -top-20" />
        <div className="relative ml-25 w-full">
        <div className="text-primary italic inline-block bg-red-100/50 px-4 py-1 rounded-full text-sm"> Friday Sale, 50%</div>
        <h1 className="font-extrabold text-[95px] italic bg-gradient-to-b leading-none from-black to-[#979797] bg-clip-text text-transparent"> WEAR YOUR <br/> TOP-QUALITY <br/> SPORTSWEAR 
        </h1>
<p className="w-1/2 mt-10 leading-loose">Engineered for endurance and designed for speed. Experience gear that moves as fast as you do. Premium fabrics. Unmatched comfort. Limitless motion
</p>
<div className="flex gap-5 mt-10">
    <Button> Explore More <FiFastForward/></Button>
    <Button variant="ghost"> Watch Video {" "}
        <Image src="/images/icon-play-video.svg"
        alt="icon playvideo"
        width={29} height={29} />
    </Button>
</div>
</div>
    <Image src="/images/img-hero.svg" 
    width={615} height={615}
    alt="image sporton hero"
    className="absolute -right-7 top-3/7 -translate-y-1/2" />
</div>
      <Image src="/images/img-ornament-hero.svg" 
    width={400} height={400}
    alt="image sporton"
    className="absolute -right-[230px] top-1/2 -translate-y-1/2 z-0" />
</div></section>
)}
export default HeroSection;
