import React from 'react';
import GreetingContainer from './greetings/greeting_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from '../components/sessions/login_form_container';
import SignupFormContainer from '../components/sessions/signup_form_container';

const App = () => (
  <div>
    <header>
      <h1>onDesk</h1>
    </header>
    <Route exact path="/" component={GreetingContainer} />
    <Route exact path="/login" component={LoginFormContainer} />
    <Route exact path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
