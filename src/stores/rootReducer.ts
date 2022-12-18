import { jsonReducer } from 're-ducks/json-placeholders/reducers';
import { todoReducer } from 're-ducks/todos/reducers';

import { combineReducers } from 'redux';

const reducer = combineReducers({
  todoReducer,
  jsonReducer,
});

export default reducer;
