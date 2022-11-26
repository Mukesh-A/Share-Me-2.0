import React from "react";
import {
  Avatar,
  Card,
  CardHeader,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
const PostItems = () => {
  return (
    <Card sx={{ maxWidth: 345, m:2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <img
        height="194"
        src="https://images.unsplash.com/photo-1579762593175-20226054cad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=936&q=80"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          This impressive paella
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This impressive paella
        </Typography>
      </CardContent>
      <Typography variant="body2" color="text.secondary" textAlign={"end"} fontStyle="italic">
          This impressive paella
        </Typography>
    </Card>
  );
};

export default PostItems;
