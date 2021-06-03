import React from 'react';
import { format } from 'date-fns';
import { differenceInCalendarDays } from 'date-fns';
import cx from 'classnames';
import style from './Day.module.sass';

function Day({ day }) {
  const isCurrentDay = !differenceInCalendarDays(day, new Date());

  return <div className={cx(style.day, { [style.currentDay]: isCurrentDay })}>{format(day, 'dd')}</div>;
}

export default Day;