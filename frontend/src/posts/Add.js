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
      width={"100vw"}
      height={"100%"}
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
      <form   onSubmit={handelSubmit}>
        <Box
          width={"100%"}
          // border={"1px solid grey"}
          padding={5}
          display="flex"
          margin={"auto"}
          // flexWrap={"wrap"}
          flexDirection={"column"}
        >
          <FormLabel sx={{ fontFamily: "quicksand", color: "#AAB8C2" }}>
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
            margin="normal"
          />
          <FormLabel sx={{ fontFamily: "quicksand", color: "#AAB8C2" }}>
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
            margin="normal"
          />
          <FormLabel sx={{ fontFamily: "quicksand", color: "#AAB8C2" }}>
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
            margin="normal"
          />
          <FormLabel sx={{ fontFamily: "quicksand", color: "#AAB8C2" }}>
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
            margin="normal"
          />
          <FormLabel sx={{ fontFamily: "quicksand", color: "#D6D9DB" }}>
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
            value={inputs.date}
            margin="normal"
          />
          <Button type="submit" padding={"5px"} variant="contained">
            Post
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Add;
