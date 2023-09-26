"use client";

import { Country } from "@/type";
import { useState } from "react";
import Image from "next/image";

type Props = {
  countries: Country[];
};

function getRandomArbitrary(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomCountry(countries: Country[]): Country[] {
  const randomIndex = getRandomArbitrary(0, countries.length);

  return countries.slice(randomIndex - 1, randomIndex);
}

export default function GameLayout({ countries }: Props) {
  const [currentCountry, setCurrentCountry] = useState<Country>(
    getRandomCountry(countries)[0]
  );
  const [answer, setAnswer] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [failure, setFailure] = useState<boolean>(false);

  const onGetNext = (): void => {
    const nextCountry: Country = getRandomCountry(countries)[0];
    setCurrentCountry(nextCountry);
    console.log("the next country", currentCountry.name.common);
    console.log("number of country", countries.length);
  };

  const onSubmitAnswer = (): void => {
    console.log("answer", answer);

    if (answer.toLowerCase() === currentCountry.name.common.toLowerCase()) {
      setSuccess(true);
      setFailure(false);
      setAnswer("");
      onGetNext();
    } else {
      setFailure(true);
      setSuccess(false);
    }
  };

  return (
    <main className="flex flex-col justify-center items-center">
      {success ? (
        <div className="text-green-400">
          <h2>Good answer !</h2>
        </div>
      ) : null}
      {failure ? (
        <div className="text-red-600">
          <h2>Wrong answer !</h2>
        </div>
      ) : null}

      <div className="min-w-96 min-h-full rounded-lg border-2 border-solid border-gray-300 shadow-sm p-1 bg-slate-100">
        <Image
          src={currentCountry.flags.png}
          alt="flag of country"
          width={250}
          height={150}
          className="rounded-lg "
        />
        <div className=" mt-10 text-center text-gray-500">
          <p className="text-md">{`Population: ${currentCountry.population}`}</p>
          {currentCountry.name.common ? currentCountry.name.common : ""}
        </div>
      </div>
      <section className="mt-8 flex flex-row gap-4">
        <input
          id="answer"
          type="text"
          placeholder="Guess here"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="bg-yellow-50 text-md w-64 p-2 outline-1 border-lime-200 round-lg border rounded focus:border-lime:400"
        />
        <button
          className="p-4 bg-lime-100 rounded-md outline-1 hover:bg-lime-400 text-black font-semibold"
          onClick={onSubmitAnswer}
        >
          submit answer
        </button>
      </section>
      <section>
        <section className="m-4 flex flex-row gap-1">
          <button className="p-4 rounded bg-slate-500" onClick={onGetNext}>
            Show next country
          </button>
        </section>
      </section>
    </main>
  );
}
