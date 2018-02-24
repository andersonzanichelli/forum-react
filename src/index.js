import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Async from './middlewares/async';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import reducers from './reducers';
import RequireAuth from './components/auth/require_auth';

import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import PostList from './components/posts_list';

const createStoreWithMiddleware = applyMiddleware(Async, reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={ browserHistory } >
      <Route path="/" component={ App } >
        <IndexRoute component={ PostList } />
        <Route path="signin" component={ Signin } />
        <Route path="signout" component={ RequireAuth(Signout) } />
        <Route path="signup" component={ Signup } />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
