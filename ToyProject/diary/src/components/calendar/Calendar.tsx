import React, { useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import styled from "styled-components";
import { DaleNoteState } from "../../action/todo";

import CalendarInfo from "../../service/calendar";
import Week from "../week/Week";
import DaleNote from "../dalenote/Dalenote";

const CalendarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #999;
`;

const CalendarContent = styled.div`
  width: 80%;
  height: 90%;
  background: rgb(252, 251, 248);
  border-radius: 5px;
`;

const WeekContainer = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% / 7);
  border-bottom: 1px solid #999;
`;

const DayContainer = styled.div`
  flex: 1 1;
  padding: 80px 10px;
  border-right: 1px solid #999;
`;

const Calendar = () => {
  const [changeMonthNumber, setChangeMonthNumber] = useState<number>(0);
  const { noteOpenKey, daleNoteReducer }: { noteOpenKey: string; daleNoteReducer: DaleNoteState[] } = useSelector((state: RootStateOrAny) => state);

  const calendarInfo = new CalendarInfo(changeMonthNumber);
  const { targetDate, calendarArr } = calendarInfo;
  const dayNameList: string[] = ["Sunday", "Monday", "Tuseday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const onNextMonth = (): void => setChangeMonthNumber(changeMonthNumber + 1);
  const onPrevMonth = (): void => setChangeMonthNumber(changeMonthNumber - 1);

  return (
    <CalendarContainer>
      <button onClick={onPrevMonth}>prev</button>
      <CalendarContent>
        <WeekContainer>
          <DayContainer>{targetDate.format("YYYYMM")}</DayContainer>
          {dayNameList.map((name, idx) => (
            <DayContainer key={idx}>{name}</DayContainer>
          ))}
        </WeekContainer>
        {calendarArr.map((week, idx) => {
          return <Week key={idx} week={week} WeekContainer={WeekContainer} />;
        })}
      </CalendarContent>
      <button onClick={onNextMonth}>next</button>
      {noteOpenKey && <DaleNote daleData={daleNoteReducer} noteOpenKey={noteOpenKey} />}
    </CalendarContainer>
  );
};

export default Calendar;
