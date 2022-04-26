import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { update } from '../../actions/session_actions'
import { selectors } from '../../reducers/selectors';


const mSTP = (state) => ({
  currentUser: selectors.getCurrentUser(state),
  photoUrl: selectors.geCurrentUserPhoto(state),
  defaultBackground: state.ui.defaultBackgroundPictures,
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
  updateUser: (user) => dispatch(update(user))
})

export default connect(mSTP, mDTP)(Greeting);