import React from 'react';
import { format } from 'date-fns';
import { isToday, isSameMonth } from 'date-fns';
import cx from 'classnames';
import style from './Day.module.sass';

function Day({ day, currentDate }) {
  const isCurrentDay = isToday(day, new Date());
  const isCurrentMonth = isSameMonth(day, currentDate)

  return <div className={cx(style.day, { [style.currentDay]: isCurrentDay, [style.disableDay]: !isCurrentMonth })}>{format(day, 'dd')}</div>;
}

export default Day;