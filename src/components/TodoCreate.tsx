import { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";

const TodoCreate = () => {
  const [open, setOpen] = useState(false);

  const onToggle = () => setOpen(!open);

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <Input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
};

export default TodoCreate;

const CircleButton = styled.button<{ open: boolean }>`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 6rem;
  height: 6rem;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f9f9f9;
  padding-left: 1.6rem;
  padding-top: 1.6rem;
  padding-right: 1.6rem;
  padding-bottom: 4rem;

  border-bottom-left-radius: 1.6rem;
  border-bottom-right-radius: 1.6rem;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 1.5rem;
  box-sizing: border-box;
`;
