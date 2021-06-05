import React from 'react';
import NavItem from './NavItem';
import style from './Header.module.sass';

function Header() {
  return (
    <header className={style.header}>
   <nav className={style.navMenu}>
   <ul className={style.navList}>
          <NavItem to='/'>Home</NavItem>
          <NavItem to='/contacts'>Calendar</NavItem>
          <NavItem to='/about'>About</NavItem>
          <NavItem to='/counter'>Counter</NavItem>
        </ul>
      </nav>
    </header>
  )
}
export default Header;