import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import TodosList from './containers/TodosList/index.jsx';
import { default as todos } from './reducers';
import { initialState } from './actions';

const store = createStore(todos);

const App = ({ state, dispatch, update }) => (
  <TodosList todos={state} dispatch={dispatch} update={update} />
);


const appRender = (store, update)=> render( <App state={store.getState()} dispatch={store.dispatch} update={update} />, document.getElementById('app') );

store.subscribe(() => appRender(store) );

appRender(store);
