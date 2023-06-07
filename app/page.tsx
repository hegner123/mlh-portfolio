import Hero from "mlh/components/hero";
import Projects from "mlh/components/projects";

export default function Home() {
  return (
    <main className="col-span-full grid grid-cols-12 pt-20">
      <Hero />
      <Projects />
    </main>
  );
}
