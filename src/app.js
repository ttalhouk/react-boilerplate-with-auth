import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import configureStore from './store/configure-store'

import AppRouter, {history} from './routers/AppRouter.jsx';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import {login, logout} from './actions/auth';

import {firebase} from './firebase/firebase';
import LoadingPage from './components/LoadingPage.jsx'

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

let hasRendered = false;
const renderApp = () => {
  if(!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
}

firebase.auth().onAuthStateChanged((user) => {
  if (user){
    store.dispatch(login(user.uid));
    renderApp();
    if(history.location.pathname === '/') {
      history.push('/dashboard');
    }
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/')
  }
});
