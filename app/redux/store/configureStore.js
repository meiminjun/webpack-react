import {
	createStore,
	applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

//applyMiddleware来自redux可以包装 store 的 dispatch
//thunk作用是使action创建函数可以返回一个function代替一个action对象
const createStoreWithMiddleware = applyMiddleware(
	thunk
)(createStore);

export default function configureStore(initialState) {
	const store = createStoreWithMiddleware(reducer, initialState,
		window.devToolsExtension && window.devToolsExtension());

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