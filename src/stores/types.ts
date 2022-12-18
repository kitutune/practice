export interface RootState {
  todoReducer: {
    lists: Array<{
      name: string;
      complete: boolean;
    }>;
  };
}
