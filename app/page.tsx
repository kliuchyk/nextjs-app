import Link from "next/link";
import Image from "next/image";
import garden from "@/public/images/garden.jpg";
import { getServerSession } from "next-auth";
import { AuthOptions } from "./api/auth/[...nextauth]/authOptions";

export default async function Home() {
  const session = await getServerSession(AuthOptions);

  return (
    <main>
      <h1>Hello {session ? session.user?.name : "World"}!</h1>

      <Link href="/users">{`<< USERS >>`}</Link>

      <Image alt="garden-image" src={garden} />
      <Image
        alt="garden-image"
        height="400"
        width="400"
        className="object-cover"
        src="https://images.pexels.com/photos/9100862/pexels-photo-9100862.jpeg"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
      />
      {/* <ProductCard /> */}
    </main>
  );
}
