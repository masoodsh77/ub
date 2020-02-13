import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bs-stepper/dist/css/bs-stepper.min.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';
import 'react-widgets/dist/css/react-widgets.css';

const middleWare = [];

if(process.env.NODE_ENV !== 'production'){
    middleWare.push(createLogger());
}


const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleWare)));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
