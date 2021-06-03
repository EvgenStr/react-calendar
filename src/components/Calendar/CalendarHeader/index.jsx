import React from 'react';
import { format } from 'date-fns';
import style from './CalendarHeader.module.sass';

export default function CalendarHeader(props) {
  const arrOfDayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const { currentDate } = props;
  const currentMonth = format(currentDate, 'MMMM yyyy')
  return (
    <div className={style.container}>
      <header>{currentMonth}</header>
      {arrOfDayNames.map(dayName => (
        <div className={style.weekDayName}>{dayName}</div>
      ))}
    </div>
  );
}