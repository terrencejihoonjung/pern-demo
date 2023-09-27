import { useState } from "react";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import { Todo } from "./components/types/TodoProps";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <InputTodo />
        <ListTodos todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
}

export default App;
