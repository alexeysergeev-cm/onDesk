import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form'

const mSTP = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'Log In'
})

const mDTP = (dispatch, ownProps) => {
  return {
    processForm: (currentUser) => dispatch(login(currentUser)),
    demoUser: (currentUser) => dispatch(login(currentUser))
  }
}


export default connect(mSTP, mDTP)(SessionForm)