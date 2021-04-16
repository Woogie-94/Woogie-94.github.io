import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { daleDataActions, DaleNoteState, noteOpenKeyActions } from "../../action/todo";

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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 600px;
  padding: 20px 40px;
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
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #999;
`;

type DaleNoteProps = {
  daleData: DaleNoteState[];
  noteOpenKey: string;
};

const DaleNote = ({ daleData, noteOpenKey }: DaleNoteProps) => {
  const { id, todos, date } = daleData.filter((todo) => todo.id === noteOpenKey)[0];
  const dispatch = useDispatch();

  const onNoteClose = () => {
    dispatch(noteOpenKeyActions.change(null));
  };

  const TodoUpdate = (text: string = ""): void => {
    dispatch(daleDataActions.update({ id, todos: [...todos, { content: text, checked: false }], date }));
  };

  console.log(todos);
  if (todos.length === 0) TodoUpdate();
  return (
    <DaleNoteContainer>
      <Dimmed onClick={onNoteClose} />
      <DaleNoteContent>
        <NoteTop onClick={() => TodoUpdate()}>{date.format("YYYYMMDD")}</NoteTop>
        {todos.map((todo, idx) => (
          <NoteTodo key={idx} {...todo} />
        ))}
      </DaleNoteContent>
    </DaleNoteContainer>
  );
};

export default DaleNote;
