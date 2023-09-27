import { useState, useEffect } from "react";

type Todo = {
  todo_id: number;
  description: string;
};

function ListTodos() {
  const [todos, setTodos] = useState([]);

  async function getTodos() {
    try {
      const response = await fetch("http://localhost:3000/todos");
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error(err);
      }
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <ul role="list" className="w-1/2 divide-y divide-gray-100">
        {todos.map((todo: Todo) => (
          <li key={todo.todo_id} className="flex justify-between py-6">
            <p className="text-sm font-semibold text-gray-900">
              {todo.description}
            </p>
            <div className="flex ">
              <button className="px-1 text-gray-500">Edit</button>
              <button className="px-1 text-gray-500">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListTodos;
