import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/auth";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import { CATEGORY, LOGIN, DASHBOARD } from "../../constants/routes";
import { classNames } from "../../utils/classNames";
import logo from "./logo.png";
import style from "./header.module.scss";

const drawerItems = [
  { text: "Dashboard", icon:<DashboardIcon />, link: DASHBOARD },
  { text: "Category", icon:<CategoryIcon />, link: CATEGORY },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate(LOGIN);
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink>
              <img src={logo} alt={logo} className={style.logo} />
            </NavLink>
          </Typography>
          {!isMobile && (
            <Box display="flex" gap={2}>
              {drawerItems.map((item) => (
                <NavLink
                  className={({ isActive }) =>
                    classNames(
                      style["nav-link"],
                      isActive && style["nav-link--active"]
                    )
                  }
                  key={item.text}
                  to={item.link}
                >
                  <Typography>{item.text}</Typography>
                </NavLink>
              ))}
            </Box>
          )}
          <Box sx={{ ml: 10 }}>
            <Button
              color="secondary"
              startIcon={<LogoutIcon />}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      {isMobile && (
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
          >
            <List>
              {drawerItems.map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      )}
    </>
  );
};

export default Header;
