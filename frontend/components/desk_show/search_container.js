import { connect } from 'react-redux';
import Search from './search';
import { fetchUser } from '../../actions/users_actions'
import { createMembership } from '../../actions/desk_memberships_actions';

const mSTP = state => {
  const message = state.deskMembership.message
  const errors = state.errors.invite
  const users = state.entities.users
  const deskId = Object.values(state.entities.desks)[0]
  return({
    users,
    deskId,
    errors,
    message,
  })
}

const mDTP = dispatch => ({
  fetchUser: email => dispatch(fetchUser(email)),
  createMembership: (payload) => dispatch(createMembership(payload))
})

export default connect(mSTP,mDTP)(Search)