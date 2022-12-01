import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import React from "react";

const Add = () => {
  return (
    <Box
      width={"100vw"}
      height={"100%"}
      display="flex"
      flexDirection={"column"}
      // justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography
        variant="h4"
        fontWeight={"bold"}
        fontFamily={"dancing script"}
      >
        Add Your Memories
      </Typography>
      <form>
        <Box
          width={"100%"}
          border={"1px solid grey"}
          padding={5}
          display="flex"
          margin={"auto"}
          flexDirection={"column"}
        >
          <FormLabel sx={{ fontFamily: "quicksand" }}>Title</FormLabel>
          <TextField margin="normal" />
          <FormLabel sx={{ fontFamily: "quicksand" }}>Description</FormLabel>
          <TextField margin="normal" />
          <FormLabel sx={{ fontFamily: "quicksand" }}>Image Url</FormLabel>
          <TextField margin="normal" />
          <FormLabel sx={{ fontFamily: "quicksand" }}>Location</FormLabel>
          <TextField margin="normal" />
          <FormLabel sx={{ fontFamily: "quicksand" }}>Date</FormLabel>
          <TextField margin="normal" />
          <Button padding={"5px"} variant="contained">
            Post
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Add;
