import Link from "next/link";
import ProductCard from "@/app/components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello World!</h1>
      <Link href="users">Users</Link>
        <ProductCard product={{name: "test", description: "Description"}} />
    </main>
  )
}
