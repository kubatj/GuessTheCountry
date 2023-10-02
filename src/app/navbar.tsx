import Link from "next/link";

export default function Navbar() {
  // todo make the nav btn look better
  return (
    <nav className="p-4 border">
      <ul className="flex flex-row w-full">
        <li className="px-4 border-b-4 border-transparent hover:border-slate-300">
          <Link href={"/"}>Home Page</Link>
        </li>
        <li className="px-4 ml-auto">
          <Link href={"/user"}>My Account</Link>
        </li>
      </ul>
    </nav>
  );
}
