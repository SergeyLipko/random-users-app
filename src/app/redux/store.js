import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';

const _withLogger = (withLogger=false) => (...middlewares) => {
  if (withLogger && process.env.NODE_ENV === `development`) {
    return [...middlewares, logger];
  } else {
    return [...middlewares];
  }
};

const store = createStore(
  rootReducer,
  applyMiddleware(..._withLogger()(thunk))
);

export default store;