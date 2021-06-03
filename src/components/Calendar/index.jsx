import React, { useState } from 'react';
import style from './Calendar.module.sass';
import { setDate, endOfMonth, eachWeekOfInterval } from 'date-fns';
import Week from './Week';
import CalendarHeader from './CalendarHeader';

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [monthDiff, setMonthDiff] = useState(0);
  const weeksInMonthArray = eachWeekOfInterval({
    start: setDate(currentDate, 1),
    end: endOfMonth(currentDate),
  });


  const weeks = weeksInMonthArray.map(weekStartDate => (
    <Week startDate={weekStartDate} key={weekStartDate.toLocaleDateString()} />
  ));
  return (
    <div className={style.container}>
      <CalendarHeader currentDate={currentDate} />
      {weeks}
    </div>
  );
}

export default Calendar;