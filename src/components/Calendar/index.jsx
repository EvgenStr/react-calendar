import React, { useState } from 'react';
import { setDate, endOfMonth, eachWeekOfInterval } from 'date-fns';
import CalendarBody from './CalendarBody';

import style from './Calendar.module.sass';

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <CalendarBody />
  );
}

export default Calendar;