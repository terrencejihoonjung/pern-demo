import { useEffect } from "react";
import EditTodo from "./EditTodo";
import { Todo } from "./types/TodoProps";

type ListTodoProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

function ListTodos({ todos, setTodos }: ListTodoProps) {
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

  async function deleteTodo(id: number): Promise<void> {
    try {
      const deleteTodo = await fetch(`http://localhost:3000/todos/${id}`, {
        method: "DELETE",
      });

      setTodos(todos.filter((todo: Todo) => todo.todo_id !== id));
      console.log(deleteTodo);
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
          <li
            key={todo.todo_id}
            className="flex justify-between items-center py-6"
          >
            <p className="text-sm font-semibold text-gray-900">
              {todo.description}
            </p>
            <div>
              <EditTodo todo={todo} />

              <button onClick={() => deleteTodo(todo.todo_id)} className="btn">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListTodos;
