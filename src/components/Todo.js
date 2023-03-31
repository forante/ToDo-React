import { MdDeleteOutline, MdDoneOutline } from "react-icons/md";

function Todo() {
  return (
    <div className="todo__block">
      <ul className="todo__items">
        <li className="todo__item">
          Купить хлеб
          <MdDeleteOutline className="todo__delete icons" />
          <MdDoneOutline className="todo__done icons" />
        </li>
        <li className="todo__item">
          Купить хлеб
          <MdDeleteOutline className="todo__delete icons" />
          <MdDoneOutline className="todo__done icons" />
        </li>
      </ul>
    </div>
  );
}

export default Todo;
