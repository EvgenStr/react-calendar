import React from 'react';
import NavItem from './NavItem';
import style from './Header.module.sass';

function Header() {
  return (
    <header className={style.header}>
      <nav className={style.navMenu}>
        <ul className={style.navList}>
          <NavItem to='/'>Home</NavItem>
          <NavItem to='/calendar'>Calendar</NavItem>
          <NavItem to='/counter'>Counter</NavItem>
          <NavItem to='/user-list'>User-List</NavItem>
        </ul>
      </nav>
    </header>
  )
}
export default Header;