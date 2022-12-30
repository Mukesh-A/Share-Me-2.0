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
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { deletePost } from "../api/helpers";
const tempImage =
  "https://images.unsplash.com/photo-1579762593175-20226054cad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=936&q=80";
const PostItems = ({ post, username }) => {
  const { _id, title, description, image, location, date, user } = post.post;
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(false);

  // console.log("mu", post.post);
  const isLoggedInUser = () => {
    if (localStorage.getItem("userId") === post.post.user._id) {
      return true;
    }
    return false;
  };
  const deletePosts = (id) => {
    console.log(id);
    deletePost(id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setOpen(true);
  };
  useEffect(() => {
    // deletePosts();
  });
  // const name = ;/
  return (
    <Card sx={{ width: 345, height: 420, m: 2, bgcolor: "#14171A" }}>
      <CardHeader
        // subheaderTypographyProps={{ color: 'white' }}
        sx={{ color: "#E1E8ED" }}
        avatar={
          <Avatar sx={{ bgcolor: "#657786" }} aria-label="recipe">
            {user?.name?.charAt(0) === undefined
              ? username.charAt(0)
              : user?.name.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title={location}
        subheader={
          <Typography sx={{ color: "#AAB8C2" }}>
            {new Date(`${date}`).toLocaleDateString()}
          </Typography>
        }
      />

      <img
        height="194"
        width="345"
        sx={{
          padding: 0,

          minHeight: "100px",
        }}
        src={image}
        alt={title}
        onError={(e) => {
          e.target.src = tempImage;
        }}
      />
      <CardContent>
        <Typography variant="h6" color="#F5F8FA">
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="#657786"
          sx={{ maxHeight: 100, overflowY: "scroll" }}
        >
          {description}
        </Typography>
      </CardContent>
      <Box
        // border={"1px solid red"}
        // width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={0}
      >
        {isLoggedInUser() && (
          <CardActions sx={{ color: "#000000" }}>
            <IconButton LinkComponent={Link} to={`/post/${_id}`}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => deletePosts(post.post._id)}>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        )}
        <Typography
          variant="body2"
          color="#657786"
          paddingRight={".2rem"}
          textAlign={"end"}
          fontStyle="italic"
        >
          ~{username ? username :user.name}
        </Typography>
      </Box>

      {/* </CardActions>
      </CardContent> */}

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
