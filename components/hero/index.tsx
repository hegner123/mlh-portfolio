"use client";
import Image from "next/image";
import ComputerIcon from "../iconComponents/computer";
import { HeroContent } from "mlh/types/heroContent";

export default function Hero(content: HeroContent) {
  return (
    <section className="grid grid-cols-12 col-span-full max-h-fit ">
      <ComputerIcon />
      <h2 className="text-6xl text-white">{content?.heroTitle}</h2>
      <div className="grid items-center col-span-4 col-start-2 row-start-1 ">
        <p className="text-md">{content?.subtitle}</p>
      </div>
      <div className="col-span-6 col-start-7">{/* <ComputerIcon /> */}</div>
    </section>
  );
}
