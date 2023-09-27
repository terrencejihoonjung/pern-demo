import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <InputTodo />
        <ListTodos />
      </div>
    </>
  );
}

export default App;
