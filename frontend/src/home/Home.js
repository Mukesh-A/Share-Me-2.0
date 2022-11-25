import { Box, Typography } from "@mui/material";
import React from "react";

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
    </Box>
  );
};

export default Home;
