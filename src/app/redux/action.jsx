// Action creators
import { ActionTypes } from "./action-types";

export const addTodo = (text) => async (dispatch) => {
  dispatch({
    type: ActionTypes.ADD_TODO,
    payload: { text },
  });
};

export const deleteTodo = (id) => async (dispatch) => {
  dispatch({
    type: ActionTypes.DELETE_TODO,
    payload: { id },
  });
};

export const toggleTodo = (id) => async (dispatch) => {
  dispatch({
    type: ActionTypes.TOGGLE_TODO,
    payload: { id },
  });
};

export const filterTodos = (filter) => async (dispatch) => {
  dispatch({
    type: ActionTypes.FILTER_TODOS,
    payload: { filter },
  });
};

// Thunks
export const addTodoAsync = (text) => async (dispatch) => {
  // Simulate API integration with a timeout
  await new Promise((resolve) => setTimeout(resolve, 2000));
  dispatch(addTodo(text));
};

export const deleteTodoAsync = (id) => async (dispatch) => {
  // Simulate API integration with a timeout
  await new Promise((resolve) => setTimeout(resolve, 2000));
  dispatch(deleteTodo(id));
};

export const toggleTodoAsync = (id) => async (dispatch) => {
  // Simulate API integration with a timeout
  await new Promise((resolve) => setTimeout(resolve, 2000));
  dispatch(toggleTodo(id));
};
