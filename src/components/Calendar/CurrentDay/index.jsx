import React from 'react';
import { format } from 'date-fns';
import style from './CurrentDay.module.sass'

function CurrentDay(props) {
  const { currentDate } = props;
  const dayName = format(currentDate, 'EEEE');
  const dayNumder = format(currentDate, 'd')
  return (
    <div className={style.container}>
      <p className={style.dayName}>{dayName}</p>
      <p className={style.dayNumber}>{dayNumder}</p>
    </div>
  )
}
export default CurrentDay;