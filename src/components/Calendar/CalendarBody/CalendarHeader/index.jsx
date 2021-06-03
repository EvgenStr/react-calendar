import React from 'react';
import style from './CalendarHeader.module.sass';

export default function CalendarHeader(props) {
  const arrOfDayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  return (
    <div className={style.weekDayNames}>
      {arrOfDayNames.map(dayName => (
        <div className={style.weekDayName} key={dayName}>{dayName}</div>
      ))}
    </div>
  );
}