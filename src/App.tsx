import { createGlobalStyle } from "styled-components";
import TodoBox from "./components/TodoBox";
import TodoHead from "./components/TodoHead";

function App() {
  return (
    <>
      <GlobalStyle />

      <TodoBox>
        <TodoHead />
      </TodoBox>
      {/* https://react.vlpt.us/mashup-todolist/01-create-components.html */}
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
*{
  box-sizing:border-box;
}
html{
  font-size:62.5%;
}
body{
  font-size:1.6rem;
  background:#F8F5FF;
}`;
