import React from 'react';
import style from './SliderControls.module.sass'

function SliderControls({next, prev}) {
  return (
    <div className={style.container}>
      <button onClick={next} className={style.nextBtn}>{'>'}</button>
      <button onClick={prev} className={style.prevBtn}>{'<'}</button>
    </div>
  )
}
export default SliderControls;