import React, { useState } from 'react';
import { setDate, endOfMonth, eachWeekOfInterval, addMonths, subMonths } from 'date-fns';
import CalendarHeader from './CalendarHeader';
import Week from './Week';
import MonthControls from './MonthControls';
import style from './CalendarBody.module.sass';

function CalendarBody(props) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const weeksInMonthArray = eachWeekOfInterval({
    start: setDate(currentDate, 1),
    end: endOfMonth(currentDate),
  }, { weekStartsOn: 1 });
  const weeks = weeksInMonthArray.map(weekStartDate => (
    <Week startDate={weekStartDate} key={weekStartDate.toLocaleDateString()} />
  ));

  const setNextMonth = () => {
    console.log('set next Month')
    setCurrentDate(addMonths(currentDate, 1))
  }

  const setPrevMonth = () => {
    console.log('set prev Month')
    setCurrentDate(subMonths(currentDate, 1))
  }
  return (
    <div className={style.container}>
      <MonthControls currentDate={currentDate} nextHandler={setNextMonth} prevHandler={setPrevMonth} />
      <CalendarHeader currentDate={currentDate} />
      {weeks}
    </div>
  )
}
export default CalendarBody;