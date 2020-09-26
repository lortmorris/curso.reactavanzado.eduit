import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware, ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import createSagaMiddleware from 'redux-saga';

import { default as todos } from './reducers';
import { initialState } from './actions';
import sagas from './sagas';
import TodosList from './containers/TodosList/index.jsx';
const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    todos,
    applyMiddleware(sagaMiddleware, routerMiddleware(history), logger),
);
sagaMiddleware.run(sagas);


const ConnectedSwitch = connect(state => ({
	location: state.location
}))(Switch);


const ContainerHome = (props) => (
  <h1>Home <Link to="/about">About</Link></h1>
);

const ContainerAbout = (props) => (
  <h1>About <Link to="/">Home</Link></h1>
);

const ContainerEmpty = (props) => (
  <h1>Empty</h1>
);

const Show404 = (props) => (
  <h1>Página no encontrada</h1>
);

const AppContainer = ({ location }) => (
    <ConnectedSwitch>
        <Route path="/" component={TodosList}>
          <Route path="about" component={ContainerAbout} />
          <Route path="todoslist/:id" component={ContainerEmpty}>
            <Route path="todoslist/:todolistId/:taskId" component={ContainerEmpty} />
          </Route>
        </Route>
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
