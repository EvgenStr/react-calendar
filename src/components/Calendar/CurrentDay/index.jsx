import React from 'react';
import { format } from 'date-fns';
import style from './CurrentDay.module.sass'

function CurrentDay(props) {
  const { currentDate } = props;
  return (
    <div className={style.container}>
      {format(currentDate,'MM/dd/yyyy')}
    </div>
  )
}
export default CurrentDay;