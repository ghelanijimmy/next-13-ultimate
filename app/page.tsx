import Link from "next/link";
import ProductCard from "@/app/components/ProductCard/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1>
        Hello {(session && <span>{session.user!.name}</span>) || "World!"}
      </h1>
      <ProductCard />
    </main>
  );
}
