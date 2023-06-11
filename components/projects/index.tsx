"use client";
import Image from "next/image";
import Fade from "react-reveal/Fade";
export default function Projects() {
  return (
    <article className="col-span-full section grid items-center">
      <div className="grid grid-cols-12 ">
        <Fade delay={200}>
          <div className="col-span-6 col-start-2">
            <h2 className="text-6xl">Projects</h2>
          </div>
          <div className="grid col-span-full grid-cols-12">
            <div className="col-start-2 col-span-10 grid md:grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="col-start-1 mt-14 ">
                <h3 className="text-4xl ">Budget Forecaster</h3>
                <p className="text-md mt-5">
                  A need I had was a way to calculate the results of my spending
                  while accounting for subscriptions and necessities.{" "}
                </p>
                <a
                  className="col-start-1 block border-b-2 border-b-blue-200 w-fit hover:border-b-blue-400 text-lg mt-5"
                  href="https://budgetforecast.io">
                  Website
                </a>
              </div>
              <div className="col-start-2 relative mt-14">
                <Image src={"/budget.png"} alt="budget" fill={true} />
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </article>
  );
}
