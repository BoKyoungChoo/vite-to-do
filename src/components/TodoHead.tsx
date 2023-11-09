import { useContext } from "react";
import styled from "styled-components";

import { TodoStateContext } from "../TodoContext";

const TodoHead = () => {
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  const todos = useContext(TodoStateContext);
  const undoneTasks = todos?.filter((todo) => !todo.done);

  return (
    <TodoHeadBlock>
      <h1>
        {dateString} <span className="day">{dayName}</span>
      </h1>
      <div className="tasks-left">할 일 {undoneTasks?.length}개 남음</div>
    </TodoHeadBlock>
  );
};

export default TodoHead;

const TodoHeadBlock = styled.div`
  padding-top: 2rem;
  padding-left: 1em;
  padding-right: 1em;
  padding-bottom: 1em;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 2.4rem;
    color: #222;
  }
  .day {
    color: #bbb;
    font-size: 1.6rem;
  }
  .tasks-left {
    color: #20c997;
    font-size: 1.5rem;
    margin-top: 40px;
    font-weight: bold;
  }
`;
