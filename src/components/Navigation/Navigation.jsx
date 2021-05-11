import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from '../Navigation/Navigation.module.css';


const Navigation = () => {
  return (
    <nav className="">
      <NavLink
        exact
        to={routes.home}
        className={styles.nav_link}
        activeClassName={styles.nav_link_active}
      >
        Home
      </NavLink>
      <NavLink
        to={routes.movies}
        className={styles.nav_link}
        activeClassName={styles.nav_link_active}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;