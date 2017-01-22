import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import JsonFormContainer from './containers/container_jsonform';
import mockData from './mockData/mockformData';
//import mockData from './mockData/mockformData_Array';
import { Provider } from 'react-redux'
import createStore from './store'
import JsonFormActions from './actions';

const store = createStore();

store.dispatch(JsonFormActions.onFieldsReceived(mockData));

class App extends Component {
  render(){
    return(
       <Provider store={store}>
          <JsonFormContainer />
      </Provider>
    ) 
  }
}

ReactDOM.render(<App />, document.getElementById('App'))
