// src/components/Filter.js
import { useDispatch } from "react-redux";
import { filterTodos } from "../redux/todos";

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      Filter:
      <button onClick={() => dispatch(filterTodos("all"))}>All</button>
      <button onClick={() => dispatch(filterTodos("completed"))}>
        Completed
      </button>
      <button onClick={() => dispatch(filterTodos("active"))}>Active</button>
    </div>
  );
};

export default Filter;
