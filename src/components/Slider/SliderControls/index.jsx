import React from 'react';
import style from './SliderControls.module.sass'

function SliderControls({ nextSlide, prevSlide }) {
  return (
    <div className={style.container}>
      <button onClick={nextSlide} className={style.nextBtn}>{'>'}</button>
      <button onClick={prevSlide} className={style.prevBtn}>{'<'}</button>
    </div>
  )
}
export default SliderControls;