import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';


const Navigation = () => {
  return (
    <nav className="nav nav-pills">
      <NavLink
        exact
        to={routes.home}
        className="nav_link"
        activeClassName="nav_link_active"
      >
        Home
      </NavLink>
      <NavLink
        to={routes.movies}
        className="nav_link"
        activeClassName="nav_link_active"
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;