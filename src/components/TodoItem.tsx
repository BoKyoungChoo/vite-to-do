import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

import { TodoDispatchContext } from "@/TodoContext";

type Props = {
  id: number;
  $done: boolean;
  text: string;
};

const TodoItem = ({ id, $done, text }: Props) => {
  const dispatch = useContext(TodoDispatchContext);

  if (!dispatch) return <p>useReducer error</p>;

  const onToggle = () => dispatch({ type: "TOGGLE", id });
  const onRemove = () => dispatch({ type: "REMOVE", id });

  return (
    <TodoItemBlock>
      <CheckCircle $done={$done} onClick={onToggle}>
        {$done && <MdDone />}
      </CheckCircle>
      <Text $done={$done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
};

export default React.memo(TodoItem);

const Remove = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: #dee2e6;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;
const TodoItemBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;
const CheckCircle = styled.div<{ $done: boolean }>`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 16px;
  border: 1px solid #ced4da;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  cursor: pointer;
  ${(props) =>
    props.$done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;
const Text = styled.div<{ $done: boolean }>`
  flex: 1;
  font-size: 1.6rem;
  color: #495057;
  ${(props) =>
    props.$done &&
    css`
      color: #ced4da;
    `}
`;
