import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import { Link } from "react-router-dom";
const linkArray = ["home", "posts", "auth"];
const Header = () => {
  const [value, setValue] = useState();
  return (
    //sx mean extra styling
    <AppBar sx={{ bgcolor: "#0A1929", position: "sticky" }}>
      <Toolbar>
        <CenterFocusStrongIcon sx={{ color: "#0D80D8" }} />
        {/* Tabs is parent element, Tab is childs */}
        <Tabs
          value={value}
          onChange={(e, val) => setValue(val)}
          sx={{ ml: "auto", textDecoration: "none" }}
        >
          {linkArray.map((link) => (
            <Tab
              LinkComponent={Link}
              to={`/${link === "home" ? "" : link}`}
              sx={{
                color: "#98A2AB",
                textDecoration: "none",
                // ":hover": {
                //   textDecoration: "underline",
                //   textUnderlineOffset: "5px",
                // },
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
