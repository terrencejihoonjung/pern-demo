import { useState } from "react";

function InputTodo() {
  const [description, setDescription] = useState("");

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setDescription(e.target.value);
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();

    try {
      const body = { description };
      const response = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      setDescription("");
      console.log(response);
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error(err);
      }
    }
  }

  return (
    <>
      <h1 className="text-4xl mt-5">Pern Todo List</h1>
      <form className="w-1/2 mt-5" onSubmit={(e) => handleSubmit(e)}>
        <label className="text-sm font-medium leading-6 text-gray-900">
          Create a Todo
        </label>
        <div className="flex mt-2 rounded-md shadow-sm">
          <input
            type="text"
            value={description}
            onChange={(e) => handleInputChange(e)}
            name="todo"
            id="todo-input"
            className="w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Write a Todo"
          />
          <button className="px-4 mx-1 rounded-md bg-indigo-500 text-slate-50">
            Add
          </button>
        </div>
      </form>
    </>
  );
}

export default InputTodo;
