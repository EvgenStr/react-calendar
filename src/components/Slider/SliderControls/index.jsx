import React from 'react';
import style from './SliderControls.module.sass';
import PropTypes from 'prop-types';

function SliderControls({ nextHandler, prevHandler }) {
  return (
    <div className={style.container}>
      <button onClick={nextHandler} className={style.nextBtn}>{'>'}</button>
      <button onClick={prevHandler} className={style.prevBtn}>{'<'}</button>
    </div>
  )
}
SliderControls.propTypes = {
  nextHandler: PropTypes.func.isRequired,
  prevHandler: PropTypes.func.isRequired,
}
export default SliderControls;