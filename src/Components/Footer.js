import React from 'react';
import styles from "./Footer.module.css"
import {ReactComponent as Kitties} from "../Assets/kitties-footer.svg"
const Footer = () => {
  return <footer className={styles.footer}>
    <Kitties/>
    <p>Kitties 2022. Todos os direitos reservados.</p>
  </footer>;
};

export default Footer;
