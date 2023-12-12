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
export default function Navigation() {
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
              <ListItemText primary={text} className="text-black" />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <header className="fixed top-0 z-40 w-full bg-transparent backdrop-blur-sm content-layout h-fit col-span-full">
      <nav className="w-full pt-4 pb-4 content-layout content-span main-nav h-fit">
        <Link href={"/"} passHref className="z-50 col-start-1 col-end-3 w-fit">
          <h6 className="left-0 text-2xl h-fit min-w-max">Michael Hegner</h6>
        </Link>
        <IconButton
          edge="end"
          onClick={handleDrawerToggle}
          className="relative right-0 ml-auto burger md:right-6">
          <MenuIcon className="text-white " />
        </IconButton>
        <ul className="relative justify-end gap-3 align-middle col-start-[-3] h-fit main-menu hidden">
          <li>
            <Link className="text-xl link" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-xl link" href="#projects">
              Projects
            </Link>
          </li>
        </ul>
        <Box
          component="nav"
          sx={{ flexShrink: { sm: 0 } }}
          className={`block md:hidden open-${mobileOpen} mobile-container`}>
          <div>{drawer}</div>
        </Box>
      </nav>
    </header>
  );
}
