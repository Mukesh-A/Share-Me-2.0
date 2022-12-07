import React from "react";
import {
  Avatar,
  Card,
  CardHeader,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
const tempImage =
  "https://images.unsplash.com/photo-1579762593175-20226054cad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=936&q=80";
const PostItems = ({ post }) => {
  console.log(!post.image);
  const isLoggedInUser = () => {
    if (localStorage.getItem("userId") === post.user) {
      return true;
    }
    return false;
  };
  return (
    <Card sx={{ width: 345, m: 2 }}>
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
        title={post.location}
        subheader={new Date(`${post.date}`).toLocaleDateString()}
      />
      <img
        height="194"
        width="345"
        src={post.image}
        alt={post.title}
        onError={(e) => {
          e.target.src = tempImage;
        }}
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.description}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign={"end"}
          fontStyle="italic"
        >
          ~{post.user}
        </Typography>
      </CardContent>
      {isLoggedInUser() && (
        <CardActions sx={{ ml: "auto" }}>
          <IconButton LinkComponent={Link} to={`/post/${post.user.name}`}>
            <EditIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      )}
    </Card>
  );
};

export default PostItems;
