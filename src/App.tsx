import { FC } from 'react';
import './App.css';
import { JsonPosts } from 'JsonPlaceHolderComponent/Container/JsonPosts';
import { TodoContainer } from 'TodoComponent/Container/TodoContainer';
import { TodoSliceContainer } from 'TodoSliceComponent/Container/TodoSliceContainer';

const App: FC = () => {
  return (
    <div className="App" style={{ height: '600px' }}>
      {/* <JsonPosts /> */}
      {/* <TodoContainer /> */}
      <TodoSliceContainer />
    </div>
  );
};

export default App;
