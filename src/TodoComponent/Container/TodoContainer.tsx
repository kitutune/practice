import { ChangeEvent, FC } from 'react';

import { useTodoOperations } from 're-ducks/todos/operations';
import { TodoState } from 're-ducks/todos/type';
import { useSelector } from 'react-redux';
import { RootState } from 'stores/types';
export const TodoContainer: FC = () => {
  const { name, setName, addList, doneList, deleteList, imCompleteList } =
    useTodoOperations();
  const inputText = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const todoState = useSelector<RootState, TodoState>(
    (state) => state.todoReducer
  );
  const lists = todoState.lists;

  return (
    <div>
      <h1>ReduxでTodoリスト作成</h1>
      <input type="text" value={name} onChange={inputText} />
      <button onClick={addList}>追加</button>
      <h2>未完了のTodoリスト</h2>
      <ul>
        {lists
          .filter((list) => !list.complete)
          .map((list, index) => (
            <div key={index}>
              {list.name}
              <button onClick={() => doneList(list.name)}>完了</button>
              <button onClick={() => deleteList(list.name)}>削除</button>
            </div>
          ))}
      </ul>
      <h2>完了したTodoリスト</h2>
      <ul>
        {lists
          .filter((list) => list.complete)
          .map((list, index) => (
            <div key={index}>
              {list.name}
              {/* {list.complete} */}
              <button onClick={() => imCompleteList(list.name)}>
                未完了に戻す
              </button>
            </div>
          ))}
      </ul>
    </div>
  );
};
