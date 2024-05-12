import React from "react";
import { useParams } from "react-router-dom";

const PostsList = () => {
  const { userId } = useParams();
  console.log(userId);

  return <div>PostsList</div>;
};

export default PostsList;
