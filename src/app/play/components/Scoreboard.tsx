type Props = {
  nbCountryFound: number;
};

export default function Scoreboard({ nbCountryFound }: Props) {
  const TOTAL_OF_COUNTRY = 250;

  return (
    <section className="flex border justify-center border-black w-full rounded p-4 mb-8">
      <h3 className="font-semibold">{`Country Found ${nbCountryFound}/${TOTAL_OF_COUNTRY}`}</h3>
    </section>
  );
}
