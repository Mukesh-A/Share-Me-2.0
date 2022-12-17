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
    <Box backgroundColor="#000000" display="flex" flexDirection={"column"}>
      {User && (
        <>
          {/* <Typography color="#AAB8C2" textAlign={"center"} variant="h3" padding={2}>
            User Profile
          </Typography> */}
          <Box
            sx={{alignSelf: 'flex-end'}}
            display="flex"
            flexDirection="row" /* default value; can be omitted */
          >
            <Typography color="#AAB8C2" textAlign={"left"} padding={1}>
              {User.name}
            </Typography>
            <Typography color="#AAB8C2" textAlign={"left"} padding={1}>
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
          </Box>
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
