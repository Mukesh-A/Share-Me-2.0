import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserDetails } from "../api/helpers";
import PostItems from "../posts/PostItems";
import { authActions } from "../store";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [User, setUser] = useState();

  useEffect(() => {
    getUserDetails()
      .then((data) => {
        setUser(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handelClick = () => {
    dispatch(authActions.logout());
    localStorage.removeItem("userId");
    navigate("/");
  };
  return (
    <Box display="flex" flexDirection={"column"}>
      {User && (
        <>
          <Typography textAlign={"center"} variant="h3" padding={2}>
            User Profile
          </Typography>
          <Typography textAlign={"left"} padding={1}>
            {User.name}
          </Typography>
          <Typography textAlign={"left"} padding={1}>
            {User.email}
          </Typography>
          <Button
            onClick={handelClick}
            color="error"
            variant="contained"
            sx={{ mr: "auto" }}
          >
            Logout
          </Button>
          <Box
            display={"flex"}
            flexDirection="column"
            justifyContent={"center"}
            alignItems="center"
          >
            {User?.posts.map((post, index) => (
              <PostItems key={post._id} post={{ post }} />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default Profile;
