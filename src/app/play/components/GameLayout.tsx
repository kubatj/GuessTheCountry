"use client";

import { Country } from "@/type";
import { useCallback, useState } from "react";

// components
import CountryCard from "./CountryCard";
import Scoreboard from "./Scoreboard";
import { PageSkeleton } from "@/ui/PageSkeleton";

type Props = {
  countries: Country[];
};

function getRandomArbitrary(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomCountry(countries: Country[], success: boolean): Country[] {
  const randomIndex = getRandomArbitrary(0, countries.length);

  let country: Country[] = [];

  if (success) {
    country = countries.splice(randomIndex - 1, 1);
  } else {
    country = countries.slice(randomIndex - 1, randomIndex);
  }

  return country; // todo need to splice only on good anwser
}

export default function GameLayout({ countries }: Props) {
  //  hooks
  const [success, setSuccess] = useState<boolean>(false);
  const [failure, setFailure] = useState<boolean>(false);
  const [answser, setAnswer] = useState<string>("");
  const [currentCountry, setCurrentCountry] = useState<Country>();

  const onGetNext = useCallback(
    (success: boolean) => {
      setCurrentCountry(getRandomCountry(countries, success)[0]);
    },
    [countries]
  );

  if (!currentCountry) {
    // should only run on init
    onGetNext(false);
  }

  const handleSubmit = (): void => {
    console.log("value", answser);

    if (
      currentCountry &&
      answser.toLocaleLowerCase() ===
        currentCountry.name.common.toLocaleLowerCase()
    ) {
      setSuccess(true);
      setFailure(false);
      setAnswer("");
      onGetNext(true);
    } else {
      setSuccess(false);
      setFailure(true);
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
      <Scoreboard nbCountryFound={250 - countries.length} />

      {currentCountry ? <CountryCard currentCountry={currentCountry} /> : null}
      <section className="m-4 flex flex-row gap-2">
        <input
          id="answer"
          type="text"
          value={answser}
          placeholder="Guess here"
          onChange={(e) => setAnswer(e.target.value)}
          className="bg-yellow-50 text-md w-64 p-2 outline-1 border-slate-700 opacity-90 round-lg border rounded "
        />
        <button
          className="p-4 bg-lime-100 rounded-md outline-1 hover:bg-lime-400 text-black font-semibold flex disabled:opacity-50"
          onClick={handleSubmit}
        >
          submit answer
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
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </section>
      <section>
        <section className="m-4 flex flex-row gap-1">
          <button
            className="p-4 rounded bg-slate-500 flex hover:opacity-95"
            onClick={() => onGetNext(false)}
          >
            Show next country
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 ml-2"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </section>
      </section>
    </main>
  );
}
