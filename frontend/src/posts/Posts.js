import { Box } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { getAllPosts } from "../api/helpers";
import PostItems from "./PostItems";

const Posts = () => {
  const [posts, setPosts] = useState();
  const getall = () => {
    getAllPosts()
      .then((data) => {
        setPosts(data.posts);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  // useEffect(() => {
  //   getAllPosts()
  //     // By using the ?. operator instead of just ., JavaScript knows to implicitly check to be sure obj.first is not null or undefined before attempting to access obj.first.second. If obj.first is null or undefined, the expression automatically short-circuits, returning undefined.
  //     .then((data) => {
  //       setPosts(data.posts);
  //       console.log(data);
  //     })
  //     .catch((err) => console.log(err));
  // },[]);
  useMemo(() => {
    getall();
  }, []);
  return (
    <Box
      display="grid"
      gridTemplateColumns={"1fr 1fr 1fr"}
      padding="1rem 1rem"
      rowGap={"2rem"}
      alignItems="center"
      // margin="auto"
      // width="100%"
      gap={3}
      paddingTop={4}
      height="auto"
      
      // justifyContent="center"
      // alignContent={"center"}
      backgroundColor="#000"
      // width="100%"
    >
      {posts &&
        posts
          .slice(0)
          .reverse()
          .map((post) => <PostItems key={post._id} post={{ post }} />)}
    </Box>
  );
};

export default Posts;
