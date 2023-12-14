// src/components/TodoList.js
import { useSelector } from "react-redux";
import TodoItem from "./todo-item";

const TodoList = () => {
  const todos = useSelector((state) => {
    return state.todos.filter((todo) => {
      if (state.filter === "all") return true;
      if (state.filter === "completed") return todo.completed;
      return !todo.completed;
    });
  });

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
