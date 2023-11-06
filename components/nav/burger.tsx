"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Drawer,
  CssBaseline,
  AppBar,
  IconButton,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const drawerWidth = "100vw";
export default function DrawerComponent() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div className="w-full">
      <IconButton
        edge="end"
        onClick={handleDrawerToggle}
        className="flex pr-5 ml-auto">
        <CloseIcon className="text-black md:hidden" />
      </IconButton>
      <Toolbar />

      <List>
        {["Home", "Projects", "Contact"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "transparent" }}>
      <Toolbar
        className="flex justify-between w-full backdrop-blur-sm"
        component={"nav"}>
        <Typography
          variant="h6"
          noWrap
          component="h6"
          className="h-fit min-w-fit">
          <Link href={"/"}>Michael Hegner</Link>
        </Typography>
        <IconButton
          edge="end"
          onClick={handleDrawerToggle}
          className="ml-auto md:hidden">
          <MenuIcon className="text-white " />
        </IconButton>
        <ul className="justify-end hidden col-span-9 gap-3 align-middle md:flex h-fit">
          <li>
            <Link className="link" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" href="projects">
              Projects
            </Link>
          </li>
        </ul>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          className="block md:hidden">
          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}>
            {drawer}
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
