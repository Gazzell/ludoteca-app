import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/system";
import {
  appBar,
  toolbar,
  profile,
  logout,
  userName,
  brandContainer,
} from "./Styles";

export function NavBar({ user, onLogout }) {
  return (
    <AppBar sx={appBar} position="static" color="inherit" role="banner">
      <Link to="/" sx={brandContainer}>
        <HomeIcon fontSize="large" aria-label="Home" />
      </Link>
      &nbsp;
      <Typography
        variant="h6"
        noWrap
        href="/"
        sx={{
          flexGrow: 1,
          display: { xs: "none", sm: "block", display: "inline-block" },
          mr: 2,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        APP
      </Typography>
      <Toolbar sx={{ toolbar }}>
        {user && (
          <Box sx={{ profile }}>
            {user?.rol === "superuser" ? (
              <Typography sx={userName} variant="h7">
                {user?.email}&nbsp;<strong>(ADMIN)</strong>
              </Typography>
            ) : (
              <Typography sx={userName} variant="h7">
                {user?.email}
              </Typography>
            )}
            <Button
              variant="contained"
              sx={logout}
              color="secondary"
              onClick={onLogout}
            >
              Logout
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
