import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import Reducer from './reducers';
import App from './components/App';
import thunk from 'redux-thunk';
import 'tachyons';



const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(Reducer, composeEnhancers(applyMiddleware(thunk)));
ReactDOM.render(

<Provider store={store}>
	<App />
</Provider>
	, 

	document.querySelector('#root') 
	);