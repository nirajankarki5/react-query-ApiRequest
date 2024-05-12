import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getUsers } from "../services/apiUsers";
import Loading from "../components/Loading";
import UserCard from "../components/UserCard";

const UsersList = () => {
  const query = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  console.log(query);

  if (query.isLoading) {
    return <Loading />;
  }

  if (query.error) {
    return <p>An error occured!!!</p>;
  }

  return (
    <div>
      {query.data.map((item) => (
        <UserCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default UsersList;
