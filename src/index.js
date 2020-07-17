import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import {mainReducer} from './reduce/mainReducer'

import 'bulma/css/bulma.css';
import './styles.scss';


const store = createStore(mainReducer)
console.log(store);
console.log(store.getState())

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
 rootElement);

