import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

const TodoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: calc(100% / 8);
  padding: 0 20px;
`;

const TodoCheckBox = styled.div`
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 2px;
  border: 2px solid #999;
`;

const TodoInput = styled.input`
  width: 100%;
  height: 30px;
  padding: 0 10px;
  background-color: rgba(0, 0, 0, 0);
`;

const TodoDelete = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid #000;
`;

type NoteTodoProps = {
  index: number;
  content: string;
  checked: boolean;
  initialTodos: Todo[];
  deleteTodo: (index: number) => void;
};

interface Todo {
  content: string;
  checked: boolean;
}

const NoteTodo = ({ index, content, checked, initialTodos, deleteTodo }: NoteTodoProps) => {
  console.log("NoteTodo");
  const [text, setText] = useState<string>(content);
  initialTodos[index] = { content: text, checked };

  const onTextChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  return (
    <TodoContainer>
      <TodoCheckBox />
      <TodoInput placeholder="할 일을 작성하세요" value={text} onChange={onTextChange} />
      <TodoDelete onClick={() => deleteTodo(index)} />
    </TodoContainer>
  );
};

export default NoteTodo;
