import {
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import { syncHistory} from 'redux-simple-router';
import { browserHistory } from 'react-router';

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(browserHistory);

//applyMiddleware来自redux可以包装 store 的 dispatch
//thunk作用是使action创建函数可以返回一个function代替一个action对象
const createStoreWithMiddleware = applyMiddleware(
  thunk,
  reduxRouterMiddleware
)(createStore);


function configureStore(initialState) {

  const store = createStoreWithMiddleware(reducer, initialState,
    window.devToolsExtension && window.devToolsExtension());

    // Required for replaying actions from devtools to work
    reduxRouterMiddleware.listenForReplays(store);

  //热替换选项
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}

export default {
  createStore:configureStore,
  history: browserHistory
};

