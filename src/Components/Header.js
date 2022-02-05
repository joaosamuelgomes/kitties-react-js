import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";
import {ReactComponent as Kitties} from "../Assets/kitties.svg";
import { UserContext } from '../UserContext';

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Kitties - Home">
          <Kitties />
        </Link>
        {data ? (
          <Link className={styles.login} to="/account">
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Cadastre-se
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;

