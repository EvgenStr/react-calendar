import React from 'react';
import { setDate, endOfMonth, eachWeekOfInterval } from 'date-fns';
import CalendarHeader from './CalendarHeader';
import Week from './Week';
import MonthControls from './MonthControls';
import style from './CalendarBody.module.sass';

function CalendarBody(props) {
  const { currentDate } = props;
  const weeksInMonthArray = eachWeekOfInterval({
    start: setDate(currentDate, 1),
    end: endOfMonth(currentDate),
  });
  const weeks = weeksInMonthArray.map(weekStartDate => (
    <Week startDate={weekStartDate} key={weekStartDate.toLocaleDateString()} />
  ));
  return (
    <div className={style.container}>
      <MonthControls currentDate={currentDate} />
      <CalendarHeader currentDate={currentDate} />
      {weeks}
    </div>
  )
}
export default CalendarBody;