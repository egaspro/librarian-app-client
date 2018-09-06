import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic, rootReducer } from './modules/root';

const initialState = { };
const enhancers = [ ];
const epicMiddleware = createEpicMiddleware();
const middleware = [
	epicMiddleware
];

if (process.env.NODE_ENV === 'development') {
	const devToolsExtension = window.devToolsExtension;
	if (typeof devToolsExtension === 'function') {
		enhancers.push(devToolsExtension())
	}
};

const composedEnhancers = compose(
	applyMiddleware(...middleware),
	...enhancers
);

const store = createStore(
	rootReducer,
	initialState,
	composedEnhancers 
);

epicMiddleware.run(rootEpic);

export default store;