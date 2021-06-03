import React, { useState } from 'react';
import { setDate, endOfMonth, eachWeekOfInterval } from 'date-fns';
import CalendarBody from './CalendarBody';

import style from './Calendar.module.sass';

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [monthDiff, setMonthDiff] = useState(0);
 
  return (
    <CalendarBody currentDate={currentDate} />
  );
}

export default Calendar;