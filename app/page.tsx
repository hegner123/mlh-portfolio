import Hero from "mlh/components/hero";
import Projects from "mlh/components/projects";
import { HeroContent } from "mlh/types/heroContent";

import client from "mlh/tina/__generated__/client";

export default async function Home(props: any) {
  const page = await client.queries.pages({ relativePath: "home.md" });
  const data = page.data.pages;
  const heroData = {
    heroTitle: data.heroTitle,
    subtitle: data.subtitle,
  };
  return (
    <main className="grid grid-cols-12 pt-20 col-span-full">
      <Hero content={heroData as HeroContent} />
      <Projects content={data} />
    </main>
  );
}
