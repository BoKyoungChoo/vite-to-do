import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const TodoBox = ({ children }: Props) => {
  return <TodoBoxBlock>{children}</TodoBoxBlock>;
};

export default TodoBox;

const TodoBoxBlock = styled.div`
  position: relative;
  width: 100%;
  max-width: 450px;
  max-height: 100vh;
  border-radius: 1rem;
  padding: 1rem;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;
