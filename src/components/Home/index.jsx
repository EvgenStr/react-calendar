import React from 'react';
import style from './Home.module.sass';

function Home() {
  return (
    <div className={style.container}>
      <div className={style.words}>
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