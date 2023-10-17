import Image from "next/image";
import Hero from "mlh/components/hero";
import ComputerIcon from "mlh/components/iconComponents/computer";
import About from "mlh/components/about";
import Projects from "mlh/components/projects";
import { HeroContent } from "mlh/types/heroContent";

import client from "mlh/tina/__generated__/client";

export default async function Home(props: any) {
  const page = await client.queries.pages({ relativePath: "home.md" });
  const data = page.data.pages;

  return (
    <main className="grid grid-cols-12 pt-20 col-span-full">
      <Hero content={data} />
      <About content={data} />
      <Projects content={data} />
    </main>
  );
}
