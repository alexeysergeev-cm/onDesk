import React from 'react'
import ReactDom from 'react-dom'
import {login, signup, logout} from './actions/session_actions'
import configureStore from './store/store'


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore()
  const rootEl = document.getElementById('root');
  ReactDom.render(<h1>Welcome to onDesk</h1>, rootEl)
  window.store = store 
  window.login = login
  window.signup = signup
  window.logout = logout
  window.getState = store.getState;
  window.dispatch = store.dispatch; 
})
