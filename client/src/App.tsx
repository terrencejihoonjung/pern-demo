import { useState } from "react";
import { Todo } from "./components/types/TodoProps";

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import Warning from "./components/Warning";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [warning, setWarning] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <InputTodo setWarning={setWarning} />
        {warning ? <Warning /> : null}
        <ListTodos todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
}

export default App;
