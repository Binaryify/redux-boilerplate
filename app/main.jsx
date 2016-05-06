import React from 'react';
import ReactDOM from 'react-dom'
import Haha from './component.jsx';
import { Provider } from 'react-redux';
import store from './store.js'
store.subscribe(() =>
 console.log(store.getState())
);
var app=document.querySelector('#app');
ReactDOM.render(
  <Provider store={store}>
  <Haha/>
  </Provider>
  ,app)
