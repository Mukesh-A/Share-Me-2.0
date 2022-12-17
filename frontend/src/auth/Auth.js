import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendAuthRequest } from "../api/helpers";
import { authActions } from "../store";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(true);
  const [inputs, setInputs] = useState({ name: "", email: "", password: "" });
  const onResReceived = (data) => {
    console.log(data);
    if (isSignup) {
      localStorage.setItem("userId", data.user._id);
    } else {
      localStorage.setItem("userId", data.id);
    }
    dispatch(authActions.login());
    navigate("/posts");
  };
  const handelChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    if (isSignup) {
      console.log("signup");
      sendAuthRequest(true, inputs)
        .then(onResReceived)
        .catch((err) => console.log(err));
    } else {
      sendAuthRequest(false, inputs)
        .then(onResReceived)
        .catch((err) => console.log(err));
    }
  };

  return (
    <Box
      width="100%"
      height="90vh"
      backgroundColor="#000000"
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        width="40%"
        borderRadius={10}
        boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      >
        <form onSubmit={handelSubmit}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            width={"60%"}
            padding={5}
            margin="auto"
            color="#D6D9DB"
          >
            <Typography color="#D6D9DB" variant="h4" textAlign={"center"}>
              {!isSignup ? "LOGIN" : "SIGNUP"}
            </Typography>
            {isSignup && (
              <>
                <FormLabel sx={{ color: "#AAB8C2" }}>Name</FormLabel>
                <TextField
                  sx={{
                    input: {
                      color: "#AAB8C2",
                      border: "1px solid #657786",
                      borderRadius: ".5rem",
                    },
                  }}
                  onChange={handelChange}
                  value={inputs.name}
                  name="name"
                  required
                  margin="normal"
                  border="1px solid red"
                />
              </>
            )}
            <FormLabel sx={{ color: "#AAB8C2" }}>Email</FormLabel>
            <TextField
              sx={{
                input: {
                  color: "#AAB8C2",
                  border: "1px solid #657786",
                  borderRadius: ".5rem",
                },
              }}
              onChange={handelChange}
              value={inputs.email}
              name="email"
              required
              margin="normal"
            />
            <FormLabel sx={{ color: "#AAB8C2" }}>Password</FormLabel>
            <TextField
            sx={{
              input: {
                color: "#AAB8C2",
                border: "1px solid #657786",
                borderRadius: ".5rem",
              },
            }}
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
              sx={{ mt: 1, borderRadius: 2 }}
            >
              {isSignup ? "Create Account" : "Login"}
            </Button>
            <Button
              onClick={() => setIsSignup(!isSignup)}
              variant="outlined"
              sx={{ mt: 1, borderRadius: 2 }}
            >
              {isSignup ? "Login" : "Create Account"}
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Auth;
