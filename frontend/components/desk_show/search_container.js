import { connect } from 'react-redux';
import Search from './search';
import { fetchUser } from '../../actions/users_actions'
import { createMembership } from '../../actions/desk_memberships_actions';

const mSTP = state => {

  const errors = state.errors.invite
  debugger
  const users = state.entities.users
  const deskId = Object.values(state.entities.desks)[0]
  return({
    users,
    deskId,
    errors
  })
}

const mDTP = dispatch => ({
  fetchUser: email => dispatch(fetchUser(email)),
  createMembership: (payload) => dispatch(createMembership(payload))
})

export default connect(mSTP,mDTP)(Search)