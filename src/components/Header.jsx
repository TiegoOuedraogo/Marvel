import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; 

const Header = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.navBar}>
        <li className={styles.navItem}><Link to="/news" className={styles.navLink}>NEWS</Link></li>
        <li className={styles.navItem}><Link to="/comics" className={styles.navLink}>COMICS</Link></li>
        <li className={styles.navItem}><Link to="/characters" className={styles.navLink}>CHARACTERS</Link></li>
        <li className={styles.navItem}><Link to="/movies" className={styles.navLink}>MOVIES</Link></li>
        <li className={styles.navItem}><Link to="/tv-shows" className={styles.navLink}>TV SHOWS</Link></li>
        <li className={styles.navItem}><Link to="/games" className={styles.navLink}>GAMES</Link></li>
        <li className={styles.navItem}><Link to="/videos" className={styles.navLink}>VIDEOS</Link></li>
        <li className={styles.navItem}><Link to="/more" className={styles.navLink}>MORE</Link></li>
      </ul>
    </header>
  );
};

export default Header;
