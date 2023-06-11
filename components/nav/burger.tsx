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

const drawerWidth = 240;
export default function DrawerComponent() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <Toolbar />

      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <Box sx={{ display: "flex" }} className="bg-transparent">
      <AppBar position="fixed" sx={{ backgroundColor: "transparent" }}>
        <Toolbar className=" backdrop-blur-sm  flex justify-between">
          <Typography variant="h6" noWrap component="div">
            Michael Hegner
          </Typography>
          <IconButton edge="start" onClick={handleDrawerToggle}>
            <MenuIcon className="hidden text-white" />
          </IconButton>
          <ul className="flex col-span-9 justify-end align-middle h-fit gap-3">
            <li>
              <Link className="link" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" href="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}>
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
