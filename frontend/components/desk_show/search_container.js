import { connect } from 'react-redux';
import Search from './search';
import { fetchUser } from '../../actions/users_actions'
import { createMembership } from '../../actions/desk_memberships_actions';
import {clearErrors, clearMessage} from '../../actions/clear_errors_actions'

const mSTP = state => {
  const message = state.deskMembership.message
  const errors = state.errors.invite
  const membershipErr = state.errors.membership 
  const users = state.entities.users
  const deskId = Object.values(state.entities.desks)[0]
  return({
    users,
    deskId,
    errors,
    message,
    membershipErr
  })
}

const mDTP = dispatch => ({
  fetchUser: email => dispatch(fetchUser(email)),
  createMembership: (payload) => dispatch(createMembership(payload)),
  clearErrors: () => dispatch(clearErrors()),
  clearMessage: () => dispatch(clearMessage())
})

export default connect(mSTP,mDTP)(Search)