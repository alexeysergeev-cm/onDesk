import React from 'react';
import GreetingContainer from './greetings/greeting_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from '../components/sessions/login_form_container';
import SignupFormContainer from '../components/sessions/signup_form_container';
import {AuthRoute} from '../util/route_util'

const App = () => (
  <div>
    <header>
      <h1>onDesk</h1>
    </header>
    <Route exact path="/" component={GreetingContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
