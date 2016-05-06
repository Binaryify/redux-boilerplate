import { combineReducers } from 'redux';
function counter(state = 0, action) {
 switch (action.type) {
 case 'INCREMENT':
   return state + 1;
 case 'DECREMENT':
   return state - 1;
 default:
   return state;
 }
}
function add(state = 0, action) {
 switch (action.type) {
 case 'ADD':
   return state + 1;
 case 'REDUCE':
   return state - 1;
 default:
   return state;
 }
}
const reducers = combineReducers({
  counter,add
});

export default reducers;
