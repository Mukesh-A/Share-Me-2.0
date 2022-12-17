import { Box, Button, Typography } from "@mui/material";
import React from "react";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";

import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Box
      position={"relative"}
      width="100%"
      height="91vh"
      backgroundColor="#000000"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box
        position={"relative"}
        width="100%"
        // height="91vh"
        backgroundColor="#000000"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CenterFocusStrongIcon sx={{ color: "#0D80D8", fontSize: "5rem" }} />
        <Typography fontSize={"2.5rem"} color="#657786">
          Capture
        </Typography>
        {/* <img src="/home.jpg" alt="post" width="100%" height="100%" />*/}
      </Box>
      <Box
        width="100%"
        // position={"absolute"}
        // bottom={"0px"}
        display={"flex"}
        flexDirection="column"
      >
        <Typography
          textAlign={"center"}
          color="#657786"
          variant="h5"
          padding={2}
        >
          Little Moments Make Big Memories
        </Typography>
        <Box margin="auto">
          <Button
            variant="outlined"
            LinkComponent={Link}
            to="/auth"
            // variant="contained"
            sx={{ ml: 3, mb: 5 }}
          >
            Create Memories
          </Button>
          <Button
            LinkComponent={Link}
            to="/posts"
            variant="contained"
            sx={{ ml: 3, mb: 5 }}
          >
            View Memories
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
