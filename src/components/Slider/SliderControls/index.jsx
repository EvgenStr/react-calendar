import React from 'react';
import style from './SliderControls.module.sass'

function SliderControls({ nextHandler, prevHandler }) {
  return (
    <div className={style.container}>
      <button onClick={nextHandler} className={style.nextBtn}>{'>'}</button>
      <button onClick={prevHandler} className={style.prevBtn}>{'<'}</button>
    </div>
  )
}
export default SliderControls;