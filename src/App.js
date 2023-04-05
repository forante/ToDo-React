import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (value) => {
    setTodos([...todos, { id: Date.now(), task: value, done: false }]);
    console.log(todos);
  };

  const doneTask = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
    console.log("удаляем");
  };

  return (
    <div className="App">
      <div className="wrapper">
        <TodoForm onAdd={addTask} />
        <div className="todo__block">
          <ul className="todo__items">
            {todos.map((item, index) => (
              <Todo
                task={item}
                id={item.id}
                key={index}
                onDone={doneTask}
                onDelete={deleteTask}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
