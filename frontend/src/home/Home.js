import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Box position={"relative"} width="100%" height="91vh">
      <img src="/home.jpg" alt="post" width="100%" height="100%" />
      <Typography
        fontSize={"4.5rem"}
        textAlign={"left"}
        fontWeight={"bold"}
        fontFamily={"Dancing Script, cursive"}
        sx={{
          position: "absolute",
          top: "0rem",
          padding: "8rem",
          background: "-webkit-linear-gradient(45deg, gray 30%, #575A5F  90%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Little Moments
        <br />
        Make Big <br /> Memories
        <br />
      </Typography>
      <Box
        width="100%"
        position={"absolute"}
        bottom={"0px"}
        display={"flex"}
        flexDirection="column"
      >
        <Typography textAlign={"center"} color="gray" variant="h4" padding={2}>
          Share Your Memories
        </Typography>
        <Box margin="auto">
          <Button variant="outlined" sx={{ mb: 5 }}>
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
