import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { DaleNoteState, noteOpenKeyActions, daleDataActions } from "../../action/todo";
import NoteTodo from "../noteTodo/NoteTodo";

const DaleNoteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const DaleNoteContent = styled.div`
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  padding: 0 20px;
  background: rgb(252, 251, 248);
  border-radius: 5px;
`;
const Dimmed = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;
const NoteTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100% / 8);
  border-bottom: 1px solid #999;
`;
const MoreTodoBtn = styled.button`
  width: 100%;
  height: calc(100% / 8);
  background-color: rgba(0, 0, 0, 0.2);
`;

type DaleNoteProps = {
  daleNoteData: DaleNoteState;
};

interface Todo {
  content: string;
  checked: boolean;
}

const DaleNote = ({ daleNoteData }: DaleNoteProps) => {
  console.log("DaleNote");
  const dispatch = useDispatch();
  const { id, todos, date } = daleNoteData;
  console.log("todos", todos);
  const initialTodo: Todo = { content: "", checked: false };
  const [initialTodos, setInitialTodos] = useState<Todo[]>([...todos]);

  const onNoteClose = (): void => {
    dispatch(noteOpenKeyActions.change(null));
    dispatch(daleDataActions.update({ id, todos: [...initialTodos], date }));
  };

  const addTodo = (): void => {
    setInitialTodos([...initialTodos, { ...initialTodo }]);
  };

  const deleteTodo = (index: number): void => {
    console.log(index);

    const a = initialTodos.slice(0, index);
    const b = initialTodos.slice(index + 1);
    console.log([...a, ...b]);
    setInitialTodos([...a, ...b]);
    dispatch(daleDataActions.update({ id, todos: [...initialTodos], date }));
  };

  console.log(initialTodos);
  return (
    <DaleNoteContainer>
      <Dimmed onClick={onNoteClose} />
      <DaleNoteContent>
        <NoteTop>
          <p>{`${date.format("M")}월 ${date.format("D")}일`}</p>
        </NoteTop>
        {initialTodos.length > 0 && initialTodos.map((todo, idx) => <NoteTodo key={idx} index={idx} {...todo} initialTodos={initialTodos} deleteTodo={deleteTodo} />)}
        <MoreTodoBtn type="button" onClick={addTodo} />
      </DaleNoteContent>
    </DaleNoteContainer>
  );
};

export default DaleNote;
