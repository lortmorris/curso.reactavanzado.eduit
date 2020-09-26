import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import { default as todos } from './reducers';
import { initialState } from './actions';

import TodosList from './containers/TodosList/index.jsx';

const history = createHistory();
const store = createStore(
    todos,
    applyMiddleware(routerMiddleware(history)),
);

window.store = store;

const Home = () => (<TodosList />);
const About = () => (<h1>About <Link to="/">Home</Link></h1>);
const Users = () => (<h1>About <Link to="/users">Users</Link></h1>);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/users" component={Users} />
          </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app'),
);
