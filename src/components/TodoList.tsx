import { useContext } from "react";

import { TodoStateContext } from "@/TodoContext";

import styled from "styled-components";
import TodoItem from "@/components/TodoItem";

const TodoList = () => {
  const todos = useContext(TodoStateContext);

  return (
    <TodoListBlock>
      {todos?.length ? (
        todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              $done={todo.done}
            />
          );
        })
      ) : (
        <TodoListNoneText>새로운 할 일을 추가해주세요😊</TodoListNoneText>
      )}
    </TodoListBlock>
  );
};

export default TodoList;

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoListNoneText = styled.p`
  display: flex;
  justify-content: center;
  opacity: 0.4;
`;
