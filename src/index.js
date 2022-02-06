import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './reducer';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
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
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
