import React, { useState } from "react";
import Logo from "../Assets/imza-logo-complet-6.svg";
import slogo from "../Assets/imza-text-3.svg"
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Accueil",
      // icon: <HomeIcon />,
    },
    {
      text: "Caractéristiques",
      // icon: <InfoIcon />,
    },
    {
      text: "Tarifs",
      // icon: <CommentRoundedIcon />,
    },
    {
      text: "À propos",
      // icon: <PhoneRoundedIcon />,
    },
    {
      text: "Blog",
      // icon: <ShoppingCartRoundedIcon />,
    },
    {
      text: "Support",
      // icon: <ShoppingCartRoundedIcon />,
    },
  ];
  return (
    <nav id="home" className="nav-container">
      <div className="nav-logo-container">
        <img src={Logo} style={{width:"60px"}} alt="" />
        {/* <img src={slogo} className="p-2" style={{width:"60px",marginTop:"10px"}} /> */}
        
      </div>
      <div className="navbar-links-container">
        <a href="#home">Accueil</a>
        <a href="#caracteristique">Caractéristiques</a>
        <a href="#billing">Tarifs</a>
        <a href="#about">À propos</a>
        <a href="#blog">Blog</a>
        <a href="#support">Support</a>
  
        <button className="primary-button">Log In</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
