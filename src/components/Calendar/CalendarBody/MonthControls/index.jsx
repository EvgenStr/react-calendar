import React from 'react';
import { format } from 'date-fns';
import style from './MonthControls.module.sass';

function MonthControls (props) {
  const { currentDate, nextHandler, prevHandler } = props;
  const currentMonthAndYear = format(currentDate, 'MMMM yyyy');

  return (
    <div className={style.container}>
      <button className={style.prevBtn} onClick={prevHandler}>{'<'}</button>
      <span>{currentMonthAndYear}</span>
      <button className={style.nextBtn} onClick={nextHandler}>{'>'}</button>
    </div>
  );
}
export default MonthControls;
