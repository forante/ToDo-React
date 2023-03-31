

function TodoForm() {
  return (
    <form className="todo__form">
      <input type="text" placeholder="Введите задание..." className="input" />
      <button className="button">Добавить</button>
    </form>
  );
}

export default TodoForm;
