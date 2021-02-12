import React from 'react';
import GreetingContainer from './greetings/greeting_container';
import { Route, Switch } from 'react-router';
import LoginFormContainer from '../components/sessions/login_form_container';
import SignupFormContainer from '../components/sessions/signup_form_container';
import {AuthRoute} from '../util/route_util'
import NavBarContainer from '../components/nav_bar/nav_bar_container'
import Home from './nav_bar/home/home'

const App = () => (
  <div>
    <Switch>
      <Route exact path='/'><Home /></Route>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;
