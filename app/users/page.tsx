import { Metadata } from "next";
import UserTable from "@/app/users/UserTable";

export const metadata: Metadata = {
  title: "Users",
  description: "Users page",
};

type UsersPageProps = {
    searchParams: {
        sortOrder: string;
    }
};


const UsersPage = async ({searchParams: {sortOrder}}: UsersPageProps) => {
  return (
    <div>
      <h1>Users</h1>
      <UserTable sortOrder={sortOrder} />
    </div>
  );
};

export default UsersPage;
