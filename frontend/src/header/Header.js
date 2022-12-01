import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const linkArray = ["home", "posts", "auth"];
const loggedInLinks = ["home", "posts", "add", "profile"];
const Header = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [value, setValue] = useState(0);
  return (
    //sx mean extra styling
    <AppBar sx={{ bgcolor: "#0A1929", position: "sticky" }}>
      <Toolbar>
        <CenterFocusStrongIcon sx={{ color: "#0D80D8" }} />
        {/* Tabs is parent element, Tab is childs */}
        <Tabs
          value={value}
          onChange={(e, val) => {
            setValue(val);
            console.log(val);
          }}
          sx={{ ml: "auto", textDecoration: "none" }}
        >
          {isLoggedIn
            ? loggedInLinks.map((link) => (
                <Tab
                  LinkComponent={Link}
                  to={`/${link === "home" ? "" : link}`}
                  sx={{
                    color: "#98A2AB",
                    textDecoration: "none",
                  }}
                  key={link}
                  label={link}
                />
              ))
            : linkArray.map((link) => (
                <Tab
                  LinkComponent={Link}
                  to={`/${link === "home" ? "" : link}`}
                  sx={{
                    color: "#98A2AB",
                    textDecoration: "none",
                  }}
                  key={link}
                  label={link}
                />
              ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
