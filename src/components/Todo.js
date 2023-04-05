import { MdDeleteOutline, MdDoneOutline } from "react-icons/md";

function Todo({ task, onDone, onDelete }) {
  return (
    <li className={task.done === true ? "done" : ""}>
      {task.task}
      <MdDeleteOutline
        onClick={() => onDelete(task.id)}
        className="todo__delete icons"
      />
      <MdDoneOutline
        onClick={() => onDone(task.id)}
        className="todo__done icons"
      />
    </li>
  );
}

export default Todo;
