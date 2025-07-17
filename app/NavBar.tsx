"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function NavBar() {
  const { status, data: session } = useSession();

  if (status === "loading") {
    return null;
  }

  return (
    <nav className="bg-slate-200 flex p-5">
      <Link href="/" className="mr-5">
        Home
      </Link>
      <Link href="/users" className="mr-5">
        Users
      </Link>
      {status === "authenticated" && (
        <>
          <div>{session.user?.name}</div>
          <Link className="ml-3" href="/api/auth/signout">
            Sign out
          </Link>
        </>
      )}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin" className="mr-5">
          Login
        </Link>
      )}
    </nav>
  );
}
