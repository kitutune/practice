import { FC } from 'react';
import './App.css';
import { TodoContainer } from 'TodoComponent/Container/TodoContainer';
// import reactLogo from './assets/react.svg';
// const title = import.meta.env.VITE_APP_TITLE;
console.dir(import.meta.env);

const App: FC = () => {
  return (
    <div className="App">
      <TodoContainer />
    </div>
  );
};

export default App;
