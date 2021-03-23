import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { update } from '../../actions/session_actions'



const mSTP = (state) => {
  const currentUser = state.entities.users[state.session.currentUserId]
  const photoUrl = state.entities.users[state.session.currentUserId].photoUrl
  return({
    currentUser,
    photoUrl
  })
}

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
  updateUser: (user) => dispatch(update(user))
})

export default connect(mSTP, mDTP)(Greeting);