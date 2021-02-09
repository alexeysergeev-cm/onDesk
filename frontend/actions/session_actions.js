import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

const logoutCurrentUser = ()  => ({
  type: REMOVE_CURRENT_USER,

})
const receiveErrors = (errors) => ({ //array
  type: RECEIVE_SESSION_ERRORS,
  errors
})


export const signup = (user) => dispatch => (
  SessionApiUtil.signup(user)
    .then((user) => dispatch(receiveCurrentUser(user)))
    .fail((errors) => dispatch(receiveErrors(errors.responseJSON)))
  )

export const login = (user) => dispatch => (
  SessionApiUtil.login(user)
      .then((nUser) => dispatch(receiveCurrentUser(nUser)))
      .fail((errors) => dispatch(receiveErrors(errors.responseJSON)))

)




export const logout = () => dispatch => (
  SessionApiUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
    .fail((errors) => dispatch(receiveErrors(errors.responseJSON)))
)

