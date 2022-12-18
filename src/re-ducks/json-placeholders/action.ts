export const JsonActions = {
  JSON_GET_POSTS: 'JSON_GET_POSTS',
  JSON_GET_POST_SINGLE: 'JSON_GET_POST_SINGLE',
  JSON_GET_COMMENT: 'JSON_GET_COMMENT',
} as const;

type ValueOf<T> = T[keyof T];

export type JsonAction = {
  type: ValueOf<typeof JsonActions>;
  payload?: {
    posts?: Array<{
      userId: number;
      id: number;
      title: string;
      body: string;
    }>;
    comments?: Array<{
      postId: number;
      id: number;
      name: string;
      email: string;
      body: string;
    }>;
  };
};
export type PostsType = {
  posts: Array<{
    userId: number;
    id: number;
    title: string;
    body: string;
  }>;
};
export type CommentsType = {
  comments: Array<{
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }>;
};

export const getJsonPosts = (
  prop: Array<{
    userId: number;
    id: number;
    title: string;
    body: string;
  }>
): JsonAction => ({
  type: JsonActions.JSON_GET_POSTS,
  payload: {
    posts: prop,
  },
});
