import { list } from '@chakra-ui/react';
import { Action, createStore } from 'redux';

const initialState = {
  lists: [
    {
      name: 'ブログを確認',
      complete: false,
    },
    {
      name: 'メールの返信',
      complete: false,
    },
  ],
};

export type STATE = typeof initialState;
export type LIST = typeof initialState.lists;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return {
        lists: [...state.lists, action.payload],
      };
    case 'DONE_LIST':
      return {
        lists: state.lists.map((list) => {
          if (list.name !== action.payload.name) return list;

          return {
            ...list,
            complete: true,
          };
        }),
      };
    case 'DELETE_LIST':
      return {
        lists: state.lists.filter((list) => list.name !== action.payload),
      };
    case 'IMCOMPLETE':
      return {
        lists: state.lists.map((list) => {
          if (list.name !== action.payload) return list;

          return { ...list, complete: false };
        }),
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
