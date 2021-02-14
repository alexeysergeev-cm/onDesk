import React from 'react';
import GreetingContainer from './greetings/greeting_container';
import { Route, Switch } from 'react-router';
import LoginFormContainer from '../components/sessions/login_form_container';
import SignupFormContainer from '../components/sessions/signup_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import NavBarContainer from '../components/nav_bar/nav_bar_container'
import Home from './nav_bar/home/home';
import DeskIndexContainer from '../components/desks/desk_index_container'
import Modal from './modal/modal'
import DeskShowContainer from './desk_show/desk_show_container';

const App = () => (
  <div className='document-container'>
      <Modal />
      <Route exact path='/'><Home /></Route>
      <ProtectedRoute exact path='/' component={DeskIndexContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path='/:deskId/deskshow' component={DeskShowContainer} />
  </div>

);

export default App;
