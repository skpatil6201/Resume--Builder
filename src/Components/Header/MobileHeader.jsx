import React from 'react';
import Logo from '../Logos/Logo';
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Switch from './../Themes/Switch';
import Divider from "@mui/material/Divider";
import { headerLinks } from './../../Data/links';
import { Link, NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";

function MobileHeader({
    onClick
}) {
    return (
        <Box onClick={onClick} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <Link to="/templete" className="flex items-center p-2 opacity-85">
                    {" "}
                    <Logo
                        width="100%"
                        height="auto"
                        alt="Almabetter Logo"
                    />
                </Link>
            </Typography>
            <Divider />
            <List
                className="drawerLinks"
                sx={{
                    display: "flex",
                    textAlign: "left",
                    paddingLeft: "20px",
                    flexDirection: "column",
                }
            }>
                {Object.entries(headerLinks).map(([name, value], index) => {
                    return (
                        <NavLink
                            key={`DesktopLink#${name}::${index}`}
                            color="inherit"
                            to={value?.link}
                            className="nav-link"
                        >
                            {value?.name}
                        </NavLink>
                    );
                })}
                <Switch />
            </List>
        </Box>
    );
}

export default MobileHeader;