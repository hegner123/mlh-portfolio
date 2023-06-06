import Image from "next/image";
import ComputerIcon from "../iconComponents/computer";
export default function Hero() {
  return (
    <section className="grid grid-cols-12 col-span-full max-h-fit  ">
      <ComputerIcon />
      <div className="col-span-3 col-start-2 grid items-center hero-section">
        <div>
          <h2 className="text-6xl">Michael Hegner</h2>
          <p className="text-md">Full stack developer.</p>
        </div>
      </div>
      <div className="col-span-6 col-start-7">{/* <ComputerIcon /> */}</div>
    </section>
  );
}
