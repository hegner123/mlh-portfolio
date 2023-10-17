"use client";
import React, { useState } from "react";
import ComputerIcon from "../iconComponents/computer";

export default function Hero(content: any) {
  const heroTitle = content.content.heroTitle;
  const subtitle = content.content.subtitle;

  return (
    <section className="relative grid grid-cols-12 grid-rows-5 col-span-full md:h-[800px] ">
      <div className="absolute top-0 left-0 z-0 w-full h-auto pointer-events-none">
        <ComputerIcon />
      </div>
      <div className="grid items-center col-start-2 row-start-2 col-end-[-2] z-10">
        <h2 className="text-6xl text-white ">{heroTitle}</h2>
        <p className="text-lg">{subtitle}</p>
      </div>
    </section>
  );
}
