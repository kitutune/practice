import { TodoState } from './type';

export const initialState: TodoState = {
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
