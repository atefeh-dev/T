// pages/index.js
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import Filter from "../components/Filter";

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
