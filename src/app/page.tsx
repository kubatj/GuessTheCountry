import Link from "next/link";
import React from "react";

export default async function Home() {
  // maybe some kind of auth or score

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
            <div className="mt-10 ">
              <Link
                className="px-4 py-3.5 rounded-md text-md font-bold shadow-sm text-black bg-lime-500 hover:bg-lime-400"
                href={"/play"}
              >
                Start a Game
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
