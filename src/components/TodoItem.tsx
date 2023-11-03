import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

type Props = {
  done: boolean;
  text: string;
};

const TodoItem = ({ done, text }: Props) => {
  return (
    <TodoItemBlock>
      <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
};

export default TodoItem;

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
const CheckCircle = styled.div<{ done: boolean }>`
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
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;
const Text = styled.div<{ done: boolean }>`
  flex: 1;
  font-size: 1.6rem;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;
