import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import { createStore } from 'redux';
import App from './App';
import reducer from './stores/rootReducer';

const store = createStore(reducer);
console.log('store.getState()', store.getState());
console.log('store.getState()', typeof store.getState());
// console.log('useSelector((state) => state);', typeof useSelector((state) => state));
// console.log('store.getState()', typeof store.getState());

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
