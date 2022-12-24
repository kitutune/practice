import { JsonState } from 're-ducks/json-placeholders/type';
import { TodoState } from 're-ducks/todos/type';

export interface RootState {
  todoReducer: TodoState;
  jsonReducer: JsonState;
}
