import React from 'react'
import ReactDom from 'react-dom'
import {login, signup, logout} from './actions/session_actions'
import configureStore from './store/store'
import Root from './components/root'
import {fetchDesks, createDesk} from './actions/desk_actions'
import { fetchUser } from './actions/users_actions'
import { createMemebership } from './actions/desk_memberships_actions'

document.addEventListener('DOMContentLoaded', () => {
  let store; 

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser}
      },
      session: { currentUserId: window.currentUser.id}
    };
    store = configureStore(preloadedState)
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  window.createDesk = createDesk;
  window.fetchDesks = fetchDesks;
  window.getState = store.getState;
  window.dispatch = store.dispatch; 


  const rootEl = document.getElementById('root');
  ReactDom.render(<Root store={store} />, rootEl)
  // window.store = store 
  // window.login = login
  // window.signup = signup
  // window.logout = logout
  window.fetchUser = fetchUser
  window.createMembership = createMemebership
})
