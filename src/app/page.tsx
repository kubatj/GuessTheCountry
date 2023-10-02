import Link from "next/link";
import React from "react";

export default async function Home() {
  return (
    <main className=" p-4 h-screen container mx-automax-w-7xl flex items-center justify-center flex-col overflow-auto">
      <section className="relative isolate px-6 py-14 lg:px-8">
        <div className="-mt-12 max-w-2xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl tracking-tight text-gray-900">
              Can you guess
              <br />
              the Country ?
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Test your Geographical knowledge with this Quiz
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                className=" flex  px-4 py-3.5 rounded-md text-md font-bold shadow-sm text-black bg-lime-500 hover:bg-lime-400"
                href={"/play"}
              >
                Start a Game
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
