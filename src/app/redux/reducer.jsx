import { ActionTypes } from "./action-type";

const initialState = { todos: [], filter: "all" };

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.payload.text, completed: false },
        ],
      };
    case ActionTypes.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case ActionTypes.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case ActionTypes.FILTER_TODOS:
      return { ...state, filter: action.payload.filter };
    default:
      return state;
  }
}
