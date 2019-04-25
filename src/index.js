import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import manageUsers from './reducers/manageUsers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(manageUsers);



// add imports and code


ReactDOM.render(
  // add imports and code
  <Provider store = {store}>
    < App />
  </Provider>
  // add imports and code
  ,
  document.getElementById('root')
);
