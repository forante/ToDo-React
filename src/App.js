import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <TodoForm />
        <Todo />
      </div>
    </div>
  );
}

export default App;
