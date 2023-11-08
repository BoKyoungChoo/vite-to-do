import { useContext } from "react";
import styled from "styled-components";

import { TodoStateContext } from "../TodoContext";

const TodoHead = () => {
  const state = useContext(TodoStateContext);

  return (
    <TodoHeadBlock>
      <h1>
        2023년 11월 02일 <span className="day">목요일</span>
      </h1>
      <div className="tasks-left">할 일 2개 남음</div>
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
