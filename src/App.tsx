import { ChangeEvent, FC, useState } from 'react';
import './App.css';
import {
  addTodo,
  deleteTODO,
  doneTODO,
  imComplete,
} from 're-ducks/todos/action';

import { TodoState } from 're-ducks/todos/type';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'stores/types';
// import reactLogo from './assets/react.svg';
// const title = import.meta.env.VITE_APP_TITLE;
console.dir(import.meta.env);

const App: FC = () => {
  // const [count, setCount] = useState(0);
  const todoState = useSelector<RootState, TodoState>(
    (state) => state.todoReducer
  );
  const lists = todoState.lists;

  const [name, setName] = useState('');

  const inputText = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const dispatch = useDispatch();
  const addList = () => {
    if (!name) return;

    dispatch(addTodo(name));
    setName('');
  };
  const doneList = (name: string) => {
    dispatch(doneTODO(name));
  };
  const deleteList = (name: string) => {
    dispatch(deleteTODO(name));
  };
  const imCompleteList = (name: string) => {
    dispatch(imComplete(name));
  };

  return (
    <div className="App">
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

export default App;
