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
      {/* https://react.vlpt.us/mashup-todolist/02-manage-state.html */}
    </>
  );
}

export default App;
