import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TodoSliceState {
  lists: Array<{
    name: string;
    complete: boolean;
  }>;
}

const initialState: TodoSliceState = {
  lists: [
    { name: 'sample', complete: false },
    { name: 'sample2', complete: false },
  ],
};

export const todoSlice = createSlice({
  name: 'todoState',
  initialState,
  reducers: {
    addTodo: (
      state,
      action: PayloadAction<{
        name: string;
        complete: boolean;
      }>
    ) => {
      console.log(action.payload);

      return {
        lists: [...state.lists, { name: action.payload.name, complete: false }],
      };
    },
    deleteTodo: (state, action: PayloadAction<{ name: string }>) => {
      console.log(action.payload);
      const newList = state.lists.filter(
        (list) => list.name !== action.payload.name
      );

      return {
        lists: newList,
      };
    },

    proceed: (state, action: PayloadAction<{ name: string }>) => {
      console.log(action.payload);
      state.lists.map((list) => {
        if (list.name === action.payload.name) {
          list.complete = true;
        }

        return list;
      });
    },
    unProceed: (state, action: PayloadAction<{ name: string }>) => {
      console.log(action.payload);

      state.lists.map((list) => {
        if (list.name === action.payload.name) {
          list.complete = false;
        }

        return list;
      });
    },
  },
});
