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

const history = createHistory();
const store = createStore(
    todos,
    applyMiddleware(routerMiddleware(history)),
);

window.store = store;

const home = () => (<h1>Home <Link to="/about">About</Link></h1>);
const about = () => (<h1>About <Link to="/">Home</Link></h1>);

class User extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: true,
    }
  }

  removeUser = (n) => {
    console.info('removing: ');
    this.setState({ show: false });
  }

  render() {
    const { n } = this.props;
    return this.state.show &&
        (<p style={{background: `${n % 2 ? '#CFCFCF' : '#ffffff'}`}} onClick={this.removeUser}>{n}</p>)

  }
}



class Users extends React.Component {
  constructor(){
    super();
    const users = [];
    for (let x =0 ; x<100; x++) users.push(x);
    this.state = {
      users,
      show: false,
    }
  }

  componentWillMount() {
    console.info('antes de ejecutar');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.info('termine el request');
        resolve();
        this.setState({show: true});
      }, 100);
    })
  }

  componentDidMount() {
    console.info('termine todo');
  }
  render() {
    console.info('rendering');
    return this.state.show && (
      <div>
        {this.state.users.map((n, i) => (
            <div key={`user-${i}`} >
              <User n={n}/>
            </div>
        )
        )}
      </div>
    );
  }
}
render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route exact path="/" component={Users} />
            <Route path="/about" component={about} />
            <Route path="/users" component={Users} />
          </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app'),
);
