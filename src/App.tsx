import { FC } from 'react';
import './App.css';
import { JsonPosts } from 'JsonPlaceHolderComponent/Container/JsonPosts';

const App: FC = () => {
  return (
    <div className="App" style={{ height: '600px' }}>
      <JsonPosts />
    </div>
  );
};

export default App;
