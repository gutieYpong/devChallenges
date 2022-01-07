import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducers from '../reducers';


const configureStore = () => createStore(
  reducers, applyMiddleware(logger),
);

export default configureStore;
