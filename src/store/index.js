import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import JsonFormReducer from '../reducers'

let enableReduxDevTools = true;

export default function() {
    var appStore = compose(
                            applyMiddleware(thunkMiddleware, promiseMiddleware),
                            enableReduxDevTools ? compose(window.devToolsExtension ? window.devToolsExtension() : f => f) : null
                          )
                          (createStore);

    var store = appStore(JsonFormReducer);

    return store;
}