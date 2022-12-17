import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAllPosts } from "../api/helpers";
import PostItems from "./PostItems";

const Posts = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    getAllPosts()
      // By using the ?. operator instead of just ., JavaScript knows to implicitly check to be sure obj.first is not null or undefined before attempting to access obj.first.second. If obj.first is null or undefined, the expression automatically short-circuits, returning undefined.
      .then((data) => {
        setPosts(data.posts);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box
      display="flex" /* establish flex container */
      flexDirection="row" /* default value; can be omitted */
      flexWrap="wrap" /* default value; can be omitted */
      // justifyContent="space-evenly"
      // flexDirection={"column"}
      gap={3}
      padding={10}
      // justifyContent="center"
      alignContent={"center"}
      backgroundColor="#000000"
      // width="100%"
    >
      {posts &&
        posts.map((post) => <PostItems key={post._id} post={{ post }} />)}
    </Box>
  );
};

export default Posts;
