import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { sendAuthRequest } from "../api/helpers";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [inputs, setInputs] = useState({ name: "", email: "", password: "" });
  const handelChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    if (isSignup) {
      console.log("signup");
      sendAuthRequest(true, inputs)
        .then((resData) => console.log(resData))
        .catch((err) => console.log(err));
    } else {
      sendAuthRequest(false, inputs)
        .then((resData) => console.log(resData))
        .catch((err) => console.log(err));
    }
  };

  return (
    <Box
      width="40%"
      borderRadius={10}
      boxShadow={"5px 5px 10px #ccc"}
      margin="auto"
      marginTop={10}
    >
      <form onSubmit={handelSubmit}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={"60%"}
          padding={5}
          margin="auto"
        >
          <Typography variant="h4" textAlign={"center"}>
            {!isSignup ? "LOGIN" : "SIGNUP"}
          </Typography>
          {isSignup && (
            <>
              <FormLabel>Name</FormLabel>
              <TextField
                onChange={handelChange}
                value={inputs.name}
                name="name"
                required
                margin="normal"
              />
            </>
          )}
          <FormLabel>Email</FormLabel>
          <TextField
            onChange={handelChange}
            value={inputs.email}
            name="email"
            required
            margin="normal"
          />
          <FormLabel>Password</FormLabel>
          <TextField
            onChange={handelChange}
            value={inputs.password}
            name="password"
            required
            margin="normal"
          />
          <Button
            // onClick={() => setIsSignup(!isSignup)}
            type="submit"
            variant="contained"
            sx={{ mt: 1, borderRadius: 5 }}
          >
            {isSignup ? "Create Account" : "Login"}
          </Button>
          <Button
            onClick={() => setIsSignup(!isSignup)}
            type="submit"
            variant="outlined"
            sx={{ mt: 1, borderRadius: 5 }}
          >
            {isSignup ? "Login" : "Create Account"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Auth;
