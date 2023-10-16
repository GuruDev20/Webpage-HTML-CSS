import React from "react";
import UsersList from "../components/UsersList";
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max",
      image: "https://images6.alphacoders.com/132/1326238.png",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};
export default Users;
