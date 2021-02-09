import React from 'react'
import ReactDom from 'react-dom'
// import configureStore from './store'
import { login } from './util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
  // const store = configureStore()
  const rootEl = document.getElementById('root');
  ReactDom.render(<h1>Welcome to onDesk</h1>, rootEl)
  // window.login = login
})
