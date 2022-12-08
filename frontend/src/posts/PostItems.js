import React, { useEffect, useState } from "react";
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
  Snackbar,
  Alert,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { deletePost } from "../api/helpers";
const tempImage =
  "https://images.unsplash.com/photo-1579762593175-20226054cad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=936&q=80";
const PostItems = ({ post }) => {
  const { _id, title, description, image, location, date, user } = post.post;
  const [open, setOpen] = useState(false);

  // useEffect(()=>{
  //   console.log("refreshed");
  // },[post])
  const isLoggedInUser = () => {
    if (localStorage.getItem("userId") === post.user) {
      return true;
    }
    return false;
  };

  const deletePosts = (id) => {
    deletePost(id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setOpen(true);
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
        subheader={new Date(`${date}`).toLocaleDateString()}
      />
      <img
        height="194"
        width="345"
        src={image}
        alt={title}
        onError={(e) => {
          e.target.src = tempImage;
        }}
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign={"end"}
          fontStyle="italic"
        >
          ~{user.name}
        </Typography>
      </CardContent>
      {isLoggedInUser() && (
        <CardActions sx={{ ml: "auto" }}>
          <IconButton LinkComponent={Link} to={`/post/${_id}`}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => deletePosts(post._id)}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      )}

      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Post deleted successfully
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default PostItems;
