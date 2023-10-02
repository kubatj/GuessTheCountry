import Image from "next/image";
import { Country } from "@/type";

type Props = {
  currentCountry: Country;
};

export default function CountryCard({ currentCountry }: Props) {
  return (
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
  );
}
