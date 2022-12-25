import { ChangeEvent, FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todoSlice, TodoSliceState } from 'stores/todoSlice';

export const TodoSliceContainer: FC = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const inputText = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const todoSliceState = useSelector<
    TodoSliceState,
    Array<{
      name: string;
      complete: boolean;
    }>
  >((state) => state.lists);
  const { addTodo, deleteTodo, proceed, unProceed } = todoSlice.actions;
  const lists = todoSliceState;
  console.log(lists.length);

  return (
    <div>
      <h1>ReduxでTodoリスト作成</h1>
      <input type="text" value={name} onChange={inputText} />
      <button
        onClick={() => {
          dispatch(addTodo({ name, complete: false }));
          setName('');
        }}
      >
        追加
      </button>
      <h2>未完了のTodoリスト</h2>
      <ul>
        {lists
          .filter((list) => !list.complete)
          .map((list, index) => (
            <div key={index}>
              {list.name}
              {/* <button onClick={() => doneList(list.name)}>完了</button> */}
              <button
                onClick={() => {
                  dispatch(proceed({ name: list.name }));
                  setName('');
                }}
              >
                完了
              </button>
              {/* <button onClick={() => deleteList(list.name)}>削除</button> */}
              <button
                onClick={() => {
                  dispatch(deleteTodo({ name: list.name }));
                  setName('');
                }}
              >
                削除
              </button>
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
              {/* <button onClick={() => imCompleteList(list.name)}> */}
              <button
                onClick={() => {
                  dispatch(unProceed({ name: list.name }));
                  setName('');
                }}
              >
                未完了に戻す
              </button>
            </div>
          ))}
      </ul>
    </div>
  );
};
