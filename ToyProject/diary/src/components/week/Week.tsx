import styled, { StyledComponent } from "styled-components";
import { Moment } from "moment";

import Day from "../day/Day";

type WeekProps = {
  week: Moment[];
  WeekContainer: StyledComponent<"div", any>;
};

const DayContainer = styled.div`
  flex: 1 1;
  padding: 10px;
  border-right: 1px solid #999;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Week = ({ week, WeekContainer }: WeekProps) => {
  return (
    <WeekContainer>
      <DayContainer />
      {week.map((day, idx) => (
        <Day key={idx} date={day} DayContainer={DayContainer} />
      ))}
    </WeekContainer>
  );
};

export default Week;
