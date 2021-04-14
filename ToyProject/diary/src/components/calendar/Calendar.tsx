import React, { useState } from "react";
import CalendarInfo from "../../service/calendar";

const Calendar = () => {
  const [changeMonthNumber, setChangeMonthNumber] = useState<number>(0);

  const calendarInfo = new CalendarInfo(changeMonthNumber);
  const { calendarArr } = calendarInfo;

  const onNextMonth = (): void => setChangeMonthNumber(changeMonthNumber + 1);
  const onPrevMonth = (): void => setChangeMonthNumber(changeMonthNumber - 1);

  return (
    <div>
      <button onClick={onPrevMonth}>prev</button>
      <button onClick={onNextMonth}>next</button>
      <div className="calendarWrap">
        {calendarArr.map((week) => {
          return (
            <div>
              {week.map((day) => (
                <span>{day.format("D")}</span>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
