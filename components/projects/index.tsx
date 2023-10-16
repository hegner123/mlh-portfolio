"use client";
import Image from "next/image";

export default function Projects(data: any) {
  return (
    <article className="grid items-center col-span-full section">
      <div className="grid grid-cols-12 ">
        <div className="col-span-6 col-start-2">
          <h2 className="text-6xl">Projects</h2>
        </div>
        <div className="grid grid-cols-12 col-span-full">
          <div className="grid col-span-10 col-start-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <div className="col-start-1 mt-14 ">
              <h3 className="text-4xl ">Budget Forecaster</h3>
              <p className="mt-5 text-md">
                A need I had was a way to calculate the results of my spending
                while accounting for subscriptions and necessities.{" "}
              </p>
              <a
                className="block col-start-1 mt-5 text-lg border-b-2 border-b-blue-200 w-fit hover:border-b-blue-400"
                href="https://budgetforecast.io">
                Website
              </a>
            </div>
            <div className="relative col-start-2 mt-14">
              <Image src={"/budget.png"} alt="budget" fill={true} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
