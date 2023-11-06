import { Metadata } from "next";
import UserTable from "@/app/users/UserTable";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Users",
  description: "Users page",
};

type UsersPageProps = {
  searchParams: {
    sortOrder: string;
  };
};

const UsersPage = async ({ searchParams: { sortOrder } }: UsersPageProps) => {
  return (
    <div>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </div>
  );
};

export default UsersPage;
