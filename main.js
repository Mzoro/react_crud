import React from 'react';
import App from './App';
import IndexUsers from './IndexUsers';
import CreateForm from './CreateForm';
import EditForm from './EditForm';
import {render} from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

render((
  <Router history = {browserHistory}>
    <Route path="/" component={App}>
      <Route path="/create" component={CreateForm}/>
      <Route path="/index" component={IndexUsers}/>
      <Route path="/edit/:userId" component={EditForm}/>
    </Route>  
  </Router>  
  ), document.getElementById('app'));
