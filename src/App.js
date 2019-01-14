import React, { Component } from 'react';
import { history } from './helpers/history';
import { Router, Route, Switch } from "react-router-dom";

import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from './helpers/store/reducers';
import rootSaga from './helpers/store/sagas';

import ListItem from './components/list-item/ListItem';
import FormComp from './components/form-comp/FormComp';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(
        sagaMiddleware,
        loggerMiddleware
    )
);
sagaMiddleware.run(rootSaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Route exact path="/" component={ListItem} />
            <Route path="/form-comp" component={FormComp} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
