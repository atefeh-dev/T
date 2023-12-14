// pages/index.js
import TodoList from "./components/todo-list";
import TodoForm from "./components/todo-form";
import Filter from "./components/todo-filter";

const Home = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList />
      <Filter />
    </div>
  );
};

export default Home;
