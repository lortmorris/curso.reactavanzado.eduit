import { combineReducers } from 'redux';

import todos from './todos';
import request from './request';
export default combineReducers({
  todos,
  request,
});
