import { Reducer } from 'redux';
import { JsonAction, JsonActions } from './action';
import { initialState, JsonState } from './type';

export const jsonReducer: Reducer<JsonState, JsonAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case JsonActions.JSON_GET_POSTS:
      //   if (!action.payload) return state;

      return {
        ...state,
        posts: action.payload
          ? action.payload.posts ?? state.posts
          : state.posts,
        comments: state.comments,
      };

    default:
      return state;
  }
};
