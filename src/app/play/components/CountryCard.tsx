import Image from "next/image";
import { Country } from "@/type";

type Props = {
  currentCountry: Country;
};

export default function CountryCard({ currentCountry }: Props) {
  console.log("currentCountry", currentCountry);
  return (
    <div className="min-w-96 min-h-full rounded-lg border-2 border-solid border-gray-300 shadow-sm p-1 bg-slate-100">
      <Image
        src={currentCountry.flags.png}
        alt="flag of country"
        width={300}
        height={150}
        className="rounded-lg "
      />
      <div className=" mt-10 pl-2 text-left text-gray-500s">
        <p className="text-md">{`Population: ${currentCountry.population}`}</p>
        <p>{currentCountry.name.common ? currentCountry.name.common : ""}</p>
        <p>Continent: {currentCountry.region}</p>
        <div>
          <p>Languages spoken: </p>
          <ul>
            {Object.values(currentCountry.languages).map((language) => (
              <li key="language" className="pl-2">
                {language}
              </li>
            ))}
          </ul>
        </div>
        <p>Capital: {currentCountry.capital}</p>
      </div>
    </div>
  );
}
