export default function CountryDetails({
  params,
}: {
  params: { name: string };
}) {
  const { name } = params;

  console.log("name", name);

  return <h1>Country Detail of this {name}</h1>;
}
