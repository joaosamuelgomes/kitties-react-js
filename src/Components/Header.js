import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";
import {ReactComponent as Kitties} from "../Assets/kitties.svg";

const Header = () => {
  return <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
          <Link className={styles.logo} to="/" aria-label='Kitties - Home'> <Kitties /></Link>
          <Link className={styles.login} to="/login">Login / Cadastro</Link>
      </nav>
  </header>;
};

export default Header;
