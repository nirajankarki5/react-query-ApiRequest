import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ id, name, username }) => {
  return (
    <Link to={`/users/${id}/posts`} className="user-card">
      <h2>{name}</h2>
      <p>@{username}</p>
    </Link>
  );
};

export default UserCard;
