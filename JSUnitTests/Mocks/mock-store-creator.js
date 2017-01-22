import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

//Add the middleware to the mockstore so we can test our promised based action
const middlewares = [ thunkMiddleware, promiseMiddleware ]
export default function() {
    let mockStore = configureMockStore(middlewares);
    return mockStore({});
}