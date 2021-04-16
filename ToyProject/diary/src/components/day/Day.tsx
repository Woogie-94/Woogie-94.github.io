import { Moment } from "moment";
import { MouseEvent } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { StyledComponent } from "styled-components";
import { daleDataActions, noteOpenKeyActions } from "../../action/todo";

type DayProps = {
  dayDate: Moment;
  DayContainer: StyledComponent<"div", any>;
};

const Day = ({ dayDate, DayContainer }: DayProps) => {
  const daleTodos = useSelector((state: RootStateOrAny) => state.daleNoteReducer);
  const dispatch = useDispatch();

  const onClick = (e: MouseEvent): void => {
    const id = e.currentTarget.id;
    const daleTodo = {
      id,
      todos: [],
      date: dayDate,
    };

    dispatch(daleDataActions.add(daleTodo));
    dispatch(noteOpenKeyActions.change(id));
  };

  return (
    <>
      <DayContainer id={dayDate && `day${dayDate.format("YYYYMMDD")}`} onClick={onClick}>
        {dayDate && dayDate.format("D")}
      </DayContainer>
    </>
  );
};

Day.defaultProps = {
  dayDate: null,
};

export default Day;
