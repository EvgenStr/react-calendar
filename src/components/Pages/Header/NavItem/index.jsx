import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import style from './NavItem.module.sass';

export default function NavItem({ children, ...other }) {
  return (
    <li className={style.listItem}>
      <NavLink exact className={cx(style.navLink)}
        activeClassName={cx(style.navLinkActive)}
        {...other} >
        {children}
      </NavLink>
    </li>
  )
}
