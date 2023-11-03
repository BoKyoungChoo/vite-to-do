import TodoBox from "./components/TodoBox";
import TodoCreate from "./components/TodoCreate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <TodoBox>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoBox>
      {/* https://react.vlpt.us/mashup-todolist/01-create-components.html */}
    </>
  );
}

export default App;
