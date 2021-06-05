import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavItem.module.sass';

export default function NavItem() {
  return (
    <li className={style.navItem}>
      <NavLink></NavLink>
    </li>
  )
}
