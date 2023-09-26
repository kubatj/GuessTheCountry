import { Country } from "@/type";
import GameLayout from "./components/GameLayout";

async function getCountries() {
  const res = await fetch("https://restcountries.com/v3.1/all");

  if (!res.ok) {
    throw new Error("failed to fetch the countries");
  }

  return res.json();
}

export default async function PlayPage() {
  const countries: Country[] = await getCountries();

  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <div className="-mt-16">
        <h1 className="text-4xl font-bold sm:text-5xl tracking-tight text-gray-900 text-center">
          Name the Country
        </h1>
        <div className="mt-10">
          <GameLayout countries={countries} />
        </div>
      </div>
    </main>
  );
}
