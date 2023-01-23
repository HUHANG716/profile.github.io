import { ThemeProvider } from "@emotion/react";
import {
  AppBar,
  Button,
  Typography,
  createTheme,
  CssBaseline,
  Toolbar,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import CameraIcon from "@mui/icons-material/PhotoCamera";
const theme = createTheme();
const Layout = () => {
  const navItems = ["Home", "About Me", "Contact Me"];
  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box alignItems="center" display="flex">
            <CameraIcon sx={{ mr: 2 }} />
            <Typography variant="h6" color="inherit" noWrap>
              Album layout
            </Typography>
          </Box>
          <Box>
            {navItems.map((item) => (
              <Button className="nav-items" variant="secondary" key={item}>
                <Typography variant="button"> {item}</Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet></Outlet>

      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
