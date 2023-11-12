import {
  createContext,
  useReducer,
  Dispatch,
  useRef,
  MutableRefObject,
} from "react";

type StateProps = { id: number; text: string; done: boolean };
type StateArrProps = StateProps[];
type ActionProps =
  | { type: "CREATE"; todo: StateProps }
  | { type: "TOGGLE"; id: number }
  | { type: "REMOVE"; id: number }
  | { type: "" };

const initialTodoList = [
  { id: 1, text: "todo 마무리하기", done: true },
  { id: 2, text: "비타민 C 챙겨먹기", done: true },
  { id: 3, text: "typescript 공부하기", done: true },
  { id: 4, text: "다음 프로젝트 만들기", done: false },
];

const todoReducer = (state: StateArrProps, action: ActionProps) => {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const TodoStateContext = createContext<StateArrProps | null>(null);
export const TodoDispatchContext = createContext<Dispatch<ActionProps> | null>(
  null
);
export const TodoNextIdContext = createContext<MutableRefObject<number> | null>(
  null
);

export const TodoProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodoList);
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};
