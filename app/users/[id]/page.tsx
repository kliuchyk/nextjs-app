import { notFound } from "next/navigation";

interface UserDetailsPageProps {
  params: { id: number };
}

export default async function UserDetailsPage({
  params,
}: UserDetailsPageProps) {
  const { id } = await params;

  if (id > 10) notFound();

  return <div>UserDetailsPage {id}</div>;
}
