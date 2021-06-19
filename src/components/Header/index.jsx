import React from 'react';
import NavItem from './NavItem';
import style from './Header.module.sass';

function Header () {
  return (
    <header className={style.header}>
      <nav className={style.navMenu}>
        <div className={style.leftSide}>
          <ul className={style.navList}>
            <NavItem to='/'>Home</NavItem>
            <NavItem to='/calendar'>Calendar</NavItem>
            <NavItem to='/counter'>Counter</NavItem>
            <NavItem to='/user-list'>User-List</NavItem>
            <NavItem to='/slider'>Slider</NavItem>
            <NavItem to='/todo'>ToDo</NavItem>
          </ul>
        </div>
        <div className={style.rightSide}>
          <ul className={style.navList}>
            <NavItem to='/sign-up'>Sign Up</NavItem>
            <NavItem to='/login'>Login</NavItem>{' '}
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Header;
