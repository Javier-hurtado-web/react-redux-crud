import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './store/reducers';

const logger = createLogger({collapsed: true});

export default createStore(
  reducers,
  applyMiddleware(logger, thunk)
);
