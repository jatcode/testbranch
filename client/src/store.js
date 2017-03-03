import React from 'react';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import superagent from 'superagent';
import feathers from 'feathers-client';
import rest from 'feathers-rest/client';

import rootReducer from './reducers/index'
import mainSaga from './sagas/index';
import sagaMonitor from './sagas/sagaMonitor/index';
import routes from './routes';

const sagaMiddleware = createSagaMiddleware({sagaMonitor});
const storeEnhancer = applyMiddleware(sagaMiddleware);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore( rootReducer /*,initialStateForStore*/, composeEnhancers(storeEnhancer));

/*Feathers conf*/
// const serverHost ='http://10.190.8.190:3030';
const serverHost ='http://localhost:3030';
const feathersApp = 
  feathers()
    .configure(rest(serverHost).superagent(superagent))
    .configure(feathers.hooks());
  
const userService = feathersApp.service('users');
sagaMiddleware.run(mainSaga,userService);
  
//sagaMiddleware.run(mainSaga,feathersApp);

const history = syncHistoryWithStore(browserHistory,store);

export const router =(
  <Provider store={store}>
    <Router history={history} routes={routes}>
    </Router>
  </Provider>
)