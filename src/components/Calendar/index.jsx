import React, { useState } from 'react';
import { setDate, endOfMonth, eachWeekOfInterval } from 'date-fns';
import CalendarBody from './CalendarBody';
import CurrentDay from './CurrentDay'

import style from './Calendar.module.sass';

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div className={style.container}>
    <CurrentDay currentDate={currentDate} />
    <CalendarBody />
    </div>
  );
}

export default Calendar;