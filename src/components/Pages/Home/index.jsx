import React from 'react';
import cx from 'classnames';
import style from './Home.module.sass';

function Home() {
  return (
    <div className={style.container}>
      <div className={cx(style.words)}>
        <span>W</span>
        <span>E</span>
        <span>L</span>
        <span>C</span>
        <span>O</span>
        <span>M</span>
        <span>E</span>
      </div>
    </div>
  )
}
export default Home;