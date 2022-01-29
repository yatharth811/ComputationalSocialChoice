import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

// Material UI
import {
  AppBar,
  Button,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  SwipeableDrawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

// Icons
import {
  Menu as MenuIcon,
  VpnKey as VpnKeyIcon,
  LockRounded as LockRoundedIcon,
  AccountCircle as AccountCircleIcon,
  ExitToAppRounded as ExitToAppRoundedIcon,
  AccountCircleRounded as AccountCircleRoundedIcon,
  SettingsBackupRestoreRounded as SettingsBackupRestoreRoundedIcon,
} from "@mui/icons-material";

// Styles
import TextLink from "../styles/TextLink";
import StyledNavLinks from "../styles/StyledNavLinks";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Styles
  const flexGrowStyle = { flexGrow: 1 };
  const colorStyle = { color: "white" };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (event, open) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      // to make drawer usable by keyboard
      return;
    }

    setIsOpen(open);
  };

  const openLink = (path, closeMenu) => {
    return () => {
      navigate(path);
      if (closeMenu) closeMenu();
    };
  };

  return (
    <>
      <div style={flexGrowStyle}>
        <AppBar
          position="fixed"
          color="transparent"
          style={{
            height: "64px",
            backgroundColor: "rgba(30, 30, 30, 0.25)",
            backdropFilter: "blur(8px)",
          }}
        >
          <Toolbar style={{ height: "64px" }}>
            {/* <IconButton
              edge="start"
              aria-label="menu"
              style={{ marginRight: 10, ...colorStyle }}
              onClick={(event) => toggleDrawer(event, true)}
            >
              <MenuIcon />
            </IconButton> */}

            <div
              onClick={openLink("/")}
              style={{
                cursor: "pointer",
                ...flexGrowStyle,
                color: "white",
                fontSize: "1.25rem",
              }}
            >
              FAID
            </div>

            <StyledNavLinks>
              <TextLink to="/" style={{ color: "white" }}>
                Home
              </TextLink>
              <TextLink
                to="/#introduction"
                style={{ color: "white" }}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("introduction")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Introduction
              </TextLink>
              <TextLink to="/#algorithms" style={{ color: "white" }}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("algorithms")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}>
                Algorithms
              </TextLink>
              <TextLink to="/cycle-elimination" style={{ color: "white" }}>
                Visualizer
              </TextLink>
              <TextLink to="/" style={{ color: "white" }}>
                About
              </TextLink>

              {/* <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenuOpen}
                color="inherit"
                style={colorStyle}
              >
                <AccountCircleIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem
                  onClick={openLink("/profile", handleMenuClose)}
                  style={{ height: "3rem" }}
                >
                  <AccountCircleRoundedIcon style={{ minWidth: 30 }} />
                  &nbsp; My Profile
                </MenuItem>
                <MenuItem
                  onClick={openLink("/logout", handleMenuClose)}
                  style={{ height: "3rem" }}
                >
                  <ExitToAppRoundedIcon style={{ minWidth: 30 }} />
                  &nbsp; Logout
                </MenuItem>
              </Menu> */}
            </StyledNavLinks>
          </Toolbar>
        </AppBar>
      </div>

      {/* <div>
        <SwipeableDrawer
          anchor="left"
          open={isOpen}
          onClose={(event) => toggleDrawer(event, false)}
          onOpen={(event) => toggleDrawer(event, true)}
        >
          <div
            role="presentation"
            onClick={(event) => toggleDrawer(event, false)}
            onKeyDown={(event) => toggleDrawer(event, false)}
            style={{ width: 270 }}
          >
            <List>
              <ListItem button onClick={openLink("/generate")}>
                <ListItemIcon>
                  <VpnKeyIcon />
                </ListItemIcon>
                <ListItemText primary="Generate Password" />
              </ListItem>
              <ListItem button onClick={openLink("/")}>
                <ListItemIcon>
                  <LockRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="My Passwords" />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button onClick={openLink("/profile")}>
                <ListItemIcon>
                  <AccountCircleRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="My Profile" />
              </ListItem>
              <ListItem button onClick={openLink("/backup")}>
                <ListItemIcon>
                  <SettingsBackupRestoreRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Backup Account" />
              </ListItem>
              <ListItem button onClick={openLink("/logout")}>
                <ListItemIcon>
                  <ExitToAppRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </div>
        </SwipeableDrawer>
      </div> */}
    </>
  );
};

export default NavBar;
