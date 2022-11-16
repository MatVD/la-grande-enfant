import Link from "next/link";
import React from "react";
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.a} href="/">Home</Link>
      <Link className={styles.a}  href="/about">Informations</Link>
    </nav>
  );
};

export default NavBar;
