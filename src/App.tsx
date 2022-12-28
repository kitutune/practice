import { FC } from 'react';
import './App.css';
import { JsonPosts } from 'JsonPlaceHolderComponent/Container/JsonPosts';
import { TodoContainer } from 'TodoComponent/Container/TodoContainer';
import { TodoSliceContainer } from 'TodoSliceComponent/Container/TodoSliceContainer';

const App: FC = () => {
  return (
    <div className="App" style={{ height: '600px' }}>
      {/** main.tsxのstoreを入れ替えるとわかる ↓ */}
      {/** createStoreで作成したもの ↓ */}
      {/* <JsonPosts /> */}
      {/** createStoreで作成したもの ↓ */}
      {/* <TodoContainer /> */}
      {/** configureStoreで作成したもの ↓ */}
      <TodoSliceContainer />
    </div>
  );
};

export default App;
