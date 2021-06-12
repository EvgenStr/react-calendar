import React from 'react';
import style from './Slide.module.sass';

function Slide(props) {
  return (
    <div className={style.wrapper}>
      <img className={style.currentSlide} {...props} alt="space" />

    </div>
  )
}
export default Slide;