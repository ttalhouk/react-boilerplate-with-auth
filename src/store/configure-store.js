import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

import authReducer from '../reducers/auth';

const composeMiddleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(combineReducers({
    auth: authReducer
  }), composeMiddleware(applyMiddleware(thunk)));

  return store;
}
