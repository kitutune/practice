export const initialState: JsonState = {
  posts: [],
  comments: [],
};

export type JsonState = {
  posts: Array<{
    userId: number;
    id: number;
    title: string;
    body: string;
  }>;
  comments: Array<{
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }>;
};
