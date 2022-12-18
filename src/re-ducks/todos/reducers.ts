import { Reducer } from 'redux';
import { TodoActions } from './action';
import { initialState } from './initializes';
import { TodoAction, TodoState } from './type';

export const todoReducer: Reducer<TodoState, TodoAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case TodoActions.ADD_TODO:
      return {
        lists: [...state.lists, { name: action.payload.name, complete: false }],
      };
    case TodoActions.DONE_TODO:
      return {
        lists: state.lists.map((list) => {
          if (list.name !== action.payload.name) return list;

          return {
            ...list,
            complete: true,
          };
        }),
      };
    case TodoActions.DELETE_TODO:
      return {
        lists: state.lists.filter((list) => list.name !== action.payload.name),
      };
    case TodoActions.IMCOMPLETE:
      return {
        lists: state.lists.map((list) => {
          if (list.name !== action.payload.name) return list;

          return { ...list, complete: false };
        }),
      };

    default: {
      const _: never = action.type;

      return state;
    }
  }
};
