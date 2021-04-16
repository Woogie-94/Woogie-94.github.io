import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

const TodoContainer = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #999;
`;

const TodoInput = styled.input``;

type NoteTodoProps = {
  content: string;
  checked: boolean;
};

const NoteTodo = ({ content, checked }: NoteTodoProps) => {
  const [text, setText] = useState<string>(content);

  const onTextChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  return (
    <TodoContainer>
      <TodoInput value={text} onChange={onTextChange} onFocus={(e) => console.log(e)} />
    </TodoContainer>
  );
};

export default NoteTodo;
