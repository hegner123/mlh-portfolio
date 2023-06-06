import Image from "next/image";
export default function Hero() {
  return (
    <section className="grid grid-cols-12 col-span-full max-h-fit py-[10rem]">
      <div className="col-span-3 col-start-2 grid items-center">
        <div>
          <h2 className="text-6xl">Michael Hegner</h2>
          <p className="text-md">Full stack developer.</p>
        </div>
      </div>
      <div className="col-span-6 col-start-7">
        <Image
          src="https://via.placeholder.com/500"
          alt="placeholder"
          width={500}
          height={500}
          priority
        />
      </div>
    </section>
  );
}
