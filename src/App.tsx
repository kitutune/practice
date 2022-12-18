import { ChangeEvent, FC, SyntheticEvent, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { LIST, STATE } from 'STORE';

const title = import.meta.env.VITE_APP_TITLE;
console.dir(import.meta.env);

export type ACTION_TYPE = {
  DONE_LIST: 'DONE_LIST';
};
export type ACTION_RETURN_TYPE = {
  DONE_LIST: (name: string) => { type: 'DONE_LIST'; payload: name };
};

const App: FC = () => {
  // const [count, setCount] = useState(0);
  const lists: LIST = useSelector((state: STATE) => state.lists);
  const [name, setName] = useState('');
  const [complete, setComplete] = useState(false);

  const inputText = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const dispatch = useDispatch();
  const addList = () => {
    if (!name) return;

    setComplete(false);

    dispatch({
      type: 'ADD_LIST',
      payload: {
        name,
        complete,
      },
    });
    setName('');
  };
  const doneList = (name: string) => {
    dispatch({ type: 'DONE_LIST', payload: { name, complete: true } });
  };
  const deleteList = (name: string) => {
    dispatch({ type: 'DELETE_LIST', payload: name });
  };
  const imComplete = (name: string) => {
    dispatch({ type: 'IMCOMPLETE', payload: name });
  };

  return (
    // <div className="App">
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
    //       <img src="/vite.svg" className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank" rel="noreferrer">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>{title}</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </div>
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
              <button onClick={() => imComplete(list.name)}>
                未完了に戻す
              </button>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default App;
