import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const istore = {
  name: 'anshuman',
  wish: ['eat', 'sleep', 'code'],
  person: [
    {
      add1: 'abc',
      add2: 'def',
    },
    {
      name: 'avi',
      age: 28,
    },
  ],
};

const store = createStore(
  reducer,
  istore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
