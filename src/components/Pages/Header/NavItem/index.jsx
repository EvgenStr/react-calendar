import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import style from './NavItem.module.sass';

function NavItem({ children, ...other }) {
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
NavItem.defaultProps = {
  to: '/',
  children: 'NavLink',
};

NavItem.propTypes = {
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavItem;