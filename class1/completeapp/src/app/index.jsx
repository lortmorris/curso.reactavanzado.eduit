import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import { default as todos } from './reducers';
import { initialState } from './actions';

const history = createHistory();

const store = createStore(
    todos,
    applyMiddleware(routerMiddleware(history)),
);

const ConnectedSwitch = connect(state => ({
	location: state.location
}))(Switch);



const AppContainer = ({ location }) => (
    <ConnectedSwitch>
        <Route exact path="/" component={(props) => (<h1>Home <Link to="/about">About</Link></h1>)} />
        <Route path="/about" component={(props) => (<h1>About <Link to="/">Home</Link></h1>)} />
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
