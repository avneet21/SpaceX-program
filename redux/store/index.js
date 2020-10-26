import { createStore,applyMiddleware } from 'redux'
import reducer from '../reducers';
import dataSaga from '../sagas/index'
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(dataSaga)