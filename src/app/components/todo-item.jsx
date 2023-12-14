// src/components/TodoItem.js
import { useDispatch } from "react-redux";
import { toggleTodoAsync, deleteTodoAsync } from "../redux/todos";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodoAsync(todo.id));
  };

  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <button onClick={() => dispatch(deleteTodoAsync(todo.id))}>Delete</button>
    </li>
  );
};

export default TodoItem;
