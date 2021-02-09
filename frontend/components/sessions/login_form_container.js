import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form'

const mSTP = (state, ownProps) => ({
  errors: a,
  formType: 'login'
})

const mDTP = (dispatch, ownProps) => ({
  processForm: (currentUser) => dispatch(login(currentUser)),
})


export default connect(mSTP, mDTP)(SessionForm)