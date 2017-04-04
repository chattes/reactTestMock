import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import App from './containers/App';
import Main from './containers/Main';
import Blog from './containers/Blog'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import {Router,Route,IndexRoute,hashHistory} from 'react-router'


const middleware = [ thunk ]
const store = createStore(
  reducer,
  applyMiddleware( ...middleware )
)
ReactDOM.render(   
  <Provider store = { store }>
  <Router history={hashHistory}>
    <Route path="/" component={Main} >
      <IndexRoute component = {App} />
      <Route path="/blog/:blogid" component={Blog} />
    </Route>
  </Router>  
  </Provider>,
  document.getElementById('root')
);
