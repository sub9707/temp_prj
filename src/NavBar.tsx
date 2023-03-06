import React from "react";
import styles from "./NavBar.module.scss";
import Logo from "./assets/Logo.png";
import SearchBox from "./SearchBox";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <div className={styles.navContainer}>
      <NavLink to="/">
        <img className={styles.logo} src={Logo} alt="logoImg" />
      </NavLink>
      <div className={styles.menuContainer}>
        <SearchBox />
        <NotificationsIcon
          sx={{
            color: "white",
            margin: "0 1.5%",
          }}
          fontSize="large"
          className={styles.notiIcon}
        />
        <AccountCircleIcon
          sx={{
            color: "white",
            marginRight: "1.5%",
            fontSize: "3.5rem",
          }}
          className={styles.account}
        />
        <MenuIcon sx={{ color: "white", cursor: "pointer" }} fontSize="large" />
      </div>
    </div>
  );
}

export default NavBar;
