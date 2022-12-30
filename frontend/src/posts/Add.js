import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPost } from "../api/helpers";

const Add = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    location: "",
    imageUrl: "",
    date: "",
  });
  const onResReceived = (data) => {
    console.log(data);
    navigate("/posts");
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    addPost(inputs)
      .then(onResReceived)
      .catch((err) => console.log(err));
  };
  const handelChange = (e) => {
    setInputs((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <Box
      // width={"100%"}
      height={"100vh"}
      display="flex"
      backgroundColor="#000000"
      flexDirection={"column"}
      // justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography
        variant="h4"
        color="#D6D9DB"
        fontWeight={"bold"}
        fontFamily={"dancing script"}
      >
        Add Your Memories
      </Typography>
      <form onSubmit={handelSubmit}>
        <Box
          height={"auto"}
          // border={"1px solid grey"}
          padding={5}
          display="flex"
          margin={"auto"}
          // flexWrap={"wrap"}
          flexDirection={"column"}
        >
          <FormLabel sx={{ fontFamily: "quicksand", color: "#AAB8C2", mt: 1 }}>
            Title
          </FormLabel>
          <TextField
            sx={{
              input: {
                color: "#AAB8C2",
                border: "1px solid #657786",
                borderRadius: ".5rem",
              },
            }}
            onChange={handelChange}
            name="title"
            value={inputs.title}
            required
            // margin="normal"
          />
          <FormLabel sx={{ fontFamily: "quicksand", color: "#AAB8C2", mt: 1 }}>
            Description
          </FormLabel>
          <TextField
            sx={{
              input: {
                color: "#AAB8C2",
                border: "1px solid #657786",
                borderRadius: ".5rem",
              },
            }}
            onChange={handelChange}
            name="description"
            value={inputs.description}
            required
            // margin="normal"
          />
          <FormLabel sx={{ fontFamily: "quicksand", color: "#AAB8C2", mt: 1 }}>
            Image Url
          </FormLabel>
          <TextField
            sx={{
              input: {
                color: "#AAB8C2",
                border: "1px solid #657786",
                borderRadius: ".5rem",
              },
            }}
            onChange={handelChange}
            name="imageUrl"
            value={inputs.imageUrl}
            required
            // margin="normal"
          />
          <FormLabel sx={{ fontFamily: "quicksand", color: "#AAB8C2", mt: 1 }}>
            Location
          </FormLabel>
          <TextField
            sx={{
              input: {
                color: "#AAB8C2",
                border: "1px solid #657786",
                borderRadius: ".5rem",
              },
            }}
            onChange={handelChange}
            name="location"
            value={inputs.location}
            required
            // margin="normal"
          />
          <FormLabel sx={{ fontFamily: "quicksand", color: "#D6D9DB", mt: 1 }}>
            Date
          </FormLabel>
          <TextField
            sx={{
              input: {
                color: "#AAB8C2",
                border: "1px solid #657786",
                borderRadius: ".5rem",
              },
            }}
            onChange={handelChange}
            name="date"
            type="date"
            value={inputs.date}
            required
            // margin="normal"
          />
          <Button
            type="submit"
            sx={{ mt: 2 }}
            padding={"5px"}
            variant="contained"
          >
            Post
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Add;
