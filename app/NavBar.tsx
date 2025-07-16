import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-slate-200 flex p-5">
      <Link href="/" className="mr-5">
        Home
      </Link>
      <Link href="/users" className="mr-5">
        Users
      </Link>
    </nav>
  );
}
