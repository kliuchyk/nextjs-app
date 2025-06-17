import React, { Suspense } from "react";
import { UserTable } from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams }: Props) => {
  const { sortOrder } = await searchParams;

  return (
    <div>
      <h1>Users Page</h1>
      <Link href="/users/new" className="btn">
        New user
      </Link>
      <Suspense>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </div>
  );
};

export default UsersPage;
