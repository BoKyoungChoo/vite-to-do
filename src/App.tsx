import { TodoProvider } from "@/TodoContext";
import TodoBox from "@/components/TodoBox";
import TodoCreate from "@/components/TodoCreate";
import TodoHead from "@/components/TodoHead";
import TodoList from "@/components/TodoList";

function App() {
  return (
    <TodoProvider>
      <TodoBox>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoBox>
    </TodoProvider>
  );
}

export default App;
