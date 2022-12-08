import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getUserDetails } from "../api/helpers";
import PostItems from "../posts/PostItems";

const Profile = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    getUserDetails()
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(user);
  return (
    <Box display="flex" flexDirection={"column"}>
      <Typography textAlign={"center"} variant="h3" padding={2}>
        User Profile
      </Typography>
      <Typography textAlign={"left"} padding={1}>
        {user.user.name}
      </Typography>
      <Typography textAlign={"left"} padding={1}>
        User emial
      </Typography>
      <Box
        display={"flex"}
        flexDirection="column"
        justifyContent={"center"}
        alignItems="center"
      >
        {/* {user.posts.map((post, index) => (
          <PostItems key={post._id} post={{ post }} />
        ))} */}
      </Box>
    </Box>
  );
};

export default Profile;
