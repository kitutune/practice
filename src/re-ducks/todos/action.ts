import { TodoAction } from './type';

export const TodoActions = {
  ADD_TODO: 'ADD_TODO',
  DONE_TODO: 'DONE_TODO',
  DELETE_TODO: 'DELETE_TODO',
  IMCOMPLETE: 'IMCOMPLETE',
} as const;

export const addTodo = (name: string): TodoAction => ({
  type: TodoActions.ADD_TODO,
  payload: {
    name,
    // complete,
  },
});
export const doneTODO = (name: string): TodoAction => ({
  type: TodoActions.DONE_TODO,
  payload: {
    name,
    // complete,
  },
});

export const deleteTODO = (name: string): TodoAction => ({
  type: TodoActions.DELETE_TODO,
  payload: {
    name,
    // complete,
  },
});

export const imComplete = (name: string): TodoAction => ({
  type: TodoActions.IMCOMPLETE,
  payload: {
    name,
    // complete,
  },
});
