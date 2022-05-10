import React from 'react';
import ReactDOM from 'react-dom/client';
import MainContent from './MainContent';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import SecondaryContent from './SecondaryContent';

// Store containing a counter and two actions: increment and reset
const store = createStore((state, action) => {
  // reducer
    if (action.type === "increment") {
        return { counter: state.counter + 1, msg: state.msg }
    } else if (action.type === "reset") {
      return { counter: 0, msg: state.msg }
    } else if (action.type === "setMessage") {
      return { counter: state.counter, msg: action.payload }
    } else {
      return state;
    }
  },
  // store initial object
  { counter: 0, msg: "" }
)
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <MainContent />
      <SecondaryContent />
    </Provider>
  </React.StrictMode>
);


