import { useState } from "react";
import { Todo } from "./types/TodoProps";

type EditTodoProps = {
  todo: Todo;
};

function EditTodo({ todo }: EditTodoProps) {
  const [editDescription, setEditDescription] = useState(todo.description);

  async function updateDescription(
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> {
    e.preventDefault();
    try {
      const body = { description: editDescription };
      const response = await fetch(
        `http://localhost:3000/todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log(response);
      window.location.reload();
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
      <button
        className="btn mx-1"
        onClick={() => {
          const myModal = document.getElementById(
            `${todo.todo_id}_modal`
          ) as HTMLDialogElement | null;
          if (myModal) {
            myModal.showModal();
          }
        }}
      >
        Edit
      </button>
      <dialog
        id={`${todo.todo_id}_modal`}
        className="modal"
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setEditDescription(todo.description);
          }
        }}
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit Description</h3>
          <input
            type="text"
            value={editDescription}
            onChange={(e) => {
              setEditDescription(e.target.value);
            }}
            className="w-full rounded-md border-0 py-1.5 pl-4 my-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <div className="modal-action">
            <form>
              <button
                onClick={(e) => updateDescription(e)}
                className="btn mx-1"
              >
                Edit
              </button>
              <button className="btn mx-1">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default EditTodo;
