import React from 'react';
import GreetingContainer from './greetings/greeting_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from '../components/sessions/login_form_container';
import SignupFormContainer from '../components/sessions/signup_form_container';
import {AuthRoute} from '../util/route_util'
import NavBarContainer from '../components/nav_bar/nav_bar_container'
import Home from './nav_bar/home/home'

const App = () => (
  <div>
    <Home />
    {/* <Route exact path="/" component={NavBarContainer} />
    <Route exact path="/greeting" component={GreetingContainer} /> */}
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
