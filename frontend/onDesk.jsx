import React from 'react'
import ReactDom from 'react-dom'
import {login, signup, logout} from './actions/session_actions'
import configureStore from './store/store'
import Root from './components/root'


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore()

  window.getState = store.getState;
  window.dispatch = store.dispatch; 


  const rootEl = document.getElementById('root');
  ReactDom.render(<Root store={store} />, rootEl)
  // window.store = store 
  window.login = login
  window.signup = signup
  window.logout = logout
})
