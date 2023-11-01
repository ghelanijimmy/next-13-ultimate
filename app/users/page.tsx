import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Users',
    description: 'Users page'
}

type UsersPageProps = {

};

interface User {
    id: number;
    name: string
}
const UsersPage = async (props: UsersPageProps) => {

    const res = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
            // cache: "no-store"
            // next: {
            //     revalidate: 10
            // }
        }
    );

    const users: User[] = await res.json();

    return (
        <div>
            <h1>Users</h1>
            <p>{new Date().toLocaleTimeString()}</p>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    );
};

export default UsersPage;