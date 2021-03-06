import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames'
import style from './PageNotFound.module.sass';

function PageNotFound() {
  return (
    <div className={style.mainbox}>
      <div className={style.err}>4</div>
      <i className={cx("far fa-question-circle fa-spin", style.far)}></i>
      <div className={style.err2}>4</div>
      <div className={style.msg}>Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go <Link to='/'>home</Link> and try from there.</p></div>
    </div>
  )
}
export default PageNotFound;