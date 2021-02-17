import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import inviteErrorsReducer from './errors/invite_errors_reducer'
import deskErrorsReducer from './errors/desk_errors_reducer'

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  invite: inviteErrorsReducer,
  desk: deskErrorsReducer,
})

export default errorsReducer