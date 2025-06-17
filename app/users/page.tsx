import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store", // Ensures fresh data on each request
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });
  const users: User[] = await res.json();

  return (
    <div>
      <h1>Users Page</h1>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th>{user.name}</th>
              <th>{user.email}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
