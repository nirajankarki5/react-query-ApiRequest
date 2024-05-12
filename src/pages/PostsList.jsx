import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getPosts } from "../services/apiPosts";
import PostCard from "../components/PostCard";
import Loading from "../components/Loading";

const PostsList = () => {
  const { userId } = useParams();

  const query = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(userId),
    staleTime: 0, // so that it refetched. Otherwise catched data was shown before
  });

  //   console.log(query);

  if (query.isLoading) {
    return <Loading />;
  }

  if (query.error) {
    return <p>An error occured!!!</p>;
  }

  return (
    <div>
      {query.data.map((item) => (
        <PostCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default PostsList;
