import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostDetails, updatePostDetails } from "../api/helpers";

const PostUpdate = () => {
  const id = useParams().id;
  console.log(id);
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    location: "",
    image: "",
  });
  useEffect(() => {
    getPostDetails(id)
      .then((data) => {
        setInputs(data.post);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    updatePostDetails(id, inputs)
      .then((res) => console.log(res))
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
      <form onSubmit={handelSubmit}>
        <Box
          width={"100%"}
          border={"1px solid grey"}
          padding={5}
          display="flex"
          margin={"auto"}
          flexDirection={"column"}
        >
          <FormLabel sx={{ fontFamily: "quicksand" }}>Title</FormLabel>
          <TextField
            onChange={handelChange}
            name="title"
            value={inputs.title}
            margin="normal"
          />
          <FormLabel sx={{ fontFamily: "quicksand" }}>Description</FormLabel>
          <TextField
            onChange={handelChange}
            name="description"
            value={inputs.description}
            margin="normal"
          />
          <FormLabel sx={{ fontFamily: "quicksand" }}>Image Url</FormLabel>
          <TextField
            onChange={handelChange}
            name="image"
            value={inputs.image}
            margin="normal"
          />
          <FormLabel sx={{ fontFamily: "quicksand" }}>Location</FormLabel>
          <TextField
            onChange={handelChange}
            name="location"
            value={inputs.location}
            margin="normal"
          />
          {/* <FormLabel sx={{ fontFamily: "quicksand" }}>Date</FormLabel>
          <TextField
            onChange={handelChange}
            name="date"
            value={inputs.date}
            margin="normal"
          /> */}
          <Button type="submit" padding={"5px"} variant="contained">
            Post
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default PostUpdate;
