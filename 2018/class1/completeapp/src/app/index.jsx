import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import { default as todos } from './reducers';
import { initialState } from './actions';

import TodosList from './containers/TodosList/index.jsx';
const history = createHistory();

const store = createStore(
    todos,
    applyMiddleware(routerMiddleware(history), logger),
);

const ConnectedSwitch = connect(state => ({
	location: state.location
}))(Switch);


const ContainerHome = (props) => (
  <h1>Home <Link to="/about">About</Link></h1>
);

const ContainerAbout = (props) => (
  <h1>About <Link to="/">Home</Link></h1>
);

const Show404 = (props) => (
  <h1>Página no encontrada</h1>
);

const AppContainer = ({ location }) => (
    <ConnectedSwitch>
        <Route exact path="/" component={TodosList} />
        <Route path="/about" component={ContainerAbout} />
        <Route component={Show404}/>
    </ConnectedSwitch>
);

const App = connect(state => ({
    location: state.location,
}))(AppContainer);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app'),
);
