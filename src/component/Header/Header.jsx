import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Header.module.scss";
const Header = () => {
  return (
    <>
      <div className={Styles.header}>
        <Link className={Styles.header__title} to="/">
          Objective Quiz App
        </Link>
        <hr className={Styles.header} />
      </div>
    </>
  );
};

export default Header;
