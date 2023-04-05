import { useState } from "react";

function TodoForm({ onAdd }) {
  const [value, setValue] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();
    onAdd(value);
    setValue("");
  };

  return (
    <form onSubmit={handlerSubmit} className="todo__form">
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        type="text"
        placeholder="Введите задание..."
        value={value}
        className="input"
      />
      <button type="submit" className="button">
        Добавить
      </button>
    </form>
  );
}

export default TodoForm;
