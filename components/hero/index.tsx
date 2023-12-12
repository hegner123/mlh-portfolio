"use client";
import React, { useState } from "react";
import ComputerIcon from "../iconComponents/computer";

export default function Hero(content: any) {
  const heroTitle = content.content.heroTitle;
  const subtitle = content.content.subtitle;

  return (
    <section className="relative content-layout grid-rows-5 col-span-full md:h-[800px] z-10">
      <div className="absolute top-0 left-0 z-0 w-full h-auto pointer-events-none">
        <ComputerIcon />
      </div>
      <div className="z-10 items-center row-start-2 content-span">
        <h2 className="text-6xl text-white ">{heroTitle}</h2>
        <p className="text-lg">{subtitle}</p>
      </div>
    </section>
  );
}
