import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import App from './containers/App';
import Main from './containers/Main';
import Blog from './containers/Blog'
import Events from './containers/EventsContainer'
import EventDetails from './containers/EventDetails'
import CommunityContainer from './containers/CommunityContainer'
import KnowledgeManagement from './containers/KnowledgeManagement'
import Communities from './containers/Communities'
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
      <Route path="/events" component={Events} />
      <Route path="events/event/:eventId" component={EventDetails} />
      <Route path="communities/community/:communityId" component={Communities} />
      <Route path="/communities" component={CommunityContainer} />
      <Route path="/km" component={KnowledgeManagement} />
    </Route>
  </Router>  
  </Provider>,
  document.getElementById('root')
);
