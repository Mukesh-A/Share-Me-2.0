import { Box } from "@mui/material";
import React from "react";
import PostItems from "./PostItems";

const Posts = () => {
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      padding={3}
      justifyContent="center"
      alignItems={"center"}
    >
      {[1, 3, 5].map((e) => (
        <PostItems />
      ))}
      
    </Box>
  );
};

export default Posts;
