import './Header.css';
import * as React from "react";
import Logo from '../Logos/Logo';
import Box from "@mui/material/Box";
import Switch from './../Themes/Switch';
import MobileHeader from './MobileHeader';
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import { headerLinks } from './../../Data/links';
import { Link, NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar 
            component="nav" 
            position="sticky" 
            className="appbar" 
            sx={{
              boxShadow: 3,
              color: 'text.primary', 
              bgcolor: 'background.default'
            }}
        >
          <Toolbar id="toolbar">
            <IconButton
              edge="start"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}>
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { sm: "block" },
                fontSize: "25px",
                position: "relative",
                top: "5px",
              }}>
              <Link to="/templete" className="homeIcon flex items-center opacity-85">
                {" "}
                <Logo
                  width="150px"
                  height="auto"
                  alt="Almabetter Logo"
                />
              </Link>
            </Typography>
            <Box color="inherit" sx={{ display: { xs: "none", sm: "block" }}}>
              {Object.entries(headerLinks).map(([name, value], index) => {
                return (
                  <NavLink
                     to={value?.link}
                     className="nav-link"
                     key={`DesktopLink#${name}::${index}`}
                  >
                    {value?.name}
                  </NavLink>
                );
              })}
              <Switch />
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: 240,
              },
            }}>
            <MobileHeader onClick={handleDrawerToggle} />
          </Drawer>
        </Box>
      </Box>
    </>
  );
}

export default Header;