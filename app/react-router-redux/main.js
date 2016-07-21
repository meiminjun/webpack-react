import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';
import '../main.scss';
import { Router, Route} from 'react-router';

const store = configureStore.createStore();

render(
  <Provider store={store}>
    <Router history={configureStore.history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
