import React from 'react';
import { getYear } from 'date-fns';
import style from './Footer.module.sass';

function Footer() {
  return (
    <footer className={style.footer}>
      <nav className={style.navFooter}>
        <span className={style.currentYear}>{getYear(new Date())}</span>
        <span className={style.currentYear}>{'React router ©'}</span>
        <span className={style.currentYear}>{'All rights reserved®'}</span>
      </nav>
    </footer>
  )
}
export default Footer;