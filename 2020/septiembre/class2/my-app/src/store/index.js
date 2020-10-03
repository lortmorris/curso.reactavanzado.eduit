import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';

import logger from 'redux-logger';

import reducers from '../reducers';

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(logger),
);

export default store;
