import React from "react";
import GreyBtn from "../UI/GreyBtn";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div>
      <div className={styles.topBar}></div>

      <div className={styles.bottomBar}>
        <h1 className={styles.title}>RoomReel</h1>
        <GreyBtn>Login</GreyBtn>
      </div>
    </div>
  );
};

export default NavBar;
