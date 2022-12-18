import { TodoActions } from './action';

type Valueof<T> = T[keyof T];
export type TodoAction = {
  type: Valueof<typeof TodoActions>;
  payload: {
    name: string;
  };
};

export type TodoState = {
  lists: Array<{
    name: string;
    complete: boolean;
  }>;
};

// 下記と同じ
// export type TodoState = {
//     lists: {
//         name: string;
//         complete: boolean;
//     }[];
// }
