import { Moment } from "moment";
import { MouseEvent } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { StyledComponent } from "styled-components";
import { daleDataActions, DaleNoteState, noteOpenKeyActions } from "../../action/todo";

type DayProps = {
  date: Moment;
  DayContainer: StyledComponent<"div", any>;
};

const Day = ({ date, DayContainer }: DayProps) => {
  console.log("Day");
  const DayId = `day${date.format("YYYYMMDD")}`;
  const dispatch = useDispatch();
  const currentTodo = useSelector((state: RootStateOrAny) => state.daleNoteReducer.filter((data: DaleNoteState) => data.id === DayId))[0];

  const onClick = (e: MouseEvent): void => {
    const id = e.currentTarget.id;

    dispatch(daleDataActions.add({ id, todos: [], date }));
    dispatch(noteOpenKeyActions.change(id));
  };

  return (
    <>
      <DayContainer id={DayId} onClick={onClick}>
        {date.format("D")}
        {currentTodo && currentTodo.todos.map((todo: any, idx: number) => <p key={idx}>{todo.content}</p>)}
      </DayContainer>
    </>
  );
};

Day.defaultProps = {
  date: null,
};

export default Day;
