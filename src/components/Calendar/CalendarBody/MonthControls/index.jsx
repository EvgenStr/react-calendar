import React from 'react'
import { format } from 'date-fns';
import style from './MonthControls.module.sass';

function MonthControls(props) {
  const { currentDate } = props;
  const currentMonthAndYear = format(currentDate, 'MMMM yyyy')

  return (
    <div className={style.container}>
     <header>{currentMonthAndYear}</header>
    </div>
  )
}
export default MonthControls;