import React from "react";
import styles from "./NavMenu.module.css";
import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <div className={styles.NavMenu_parent}>
      <ul>
        <li>
          <NavLink to={'/'}>Главная</NavLink>
        </li>
        <li>
          <NavLink to={'/dateis'}>Информация</NavLink>
        </li>
        <li>
          <NavLink to={'/mui'}>MUI</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
