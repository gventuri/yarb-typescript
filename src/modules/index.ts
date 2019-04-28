import { combineReducers } from 'redux';
import module1 from './module1';
//import module2 from './module2';

const rootReducer = combineReducers({
  //module2,
  module1
});

export default rootReducer;
