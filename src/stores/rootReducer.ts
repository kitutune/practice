import { todoReducer } from 're-ducks/todos/reducers';

import { combineReducers } from 'redux';

const reducer = combineReducers({
  todoReducer,
});

export default reducer;
