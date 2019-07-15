import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/login'
import Dashboard from './pages/dashboard';
import Register from './pages/register';
import Activity from './components/Activity';
import NoMatch from './pages/404';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/register' component={Register} />
      <Route exact path='/dashboard' component={Dashboard} />
      <Route path='/activity/:id' component={Activity} />

      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>
);

export default Routes;