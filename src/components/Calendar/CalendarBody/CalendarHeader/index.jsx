import React from 'react';
import style from './CalendarHeader.module.sass';

function CalendarHeader(props) {
  const arrOfDayNames = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  return (
    <div className={style.weekDayNames}>
      {arrOfDayNames.map(dayName => (
        <div className={style.weekDayName} key={dayName}>{dayName}</div>
      ))}
    </div>
  );
}

export default CalendarHeader;