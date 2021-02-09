import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = (state, ownProps) => ({
  errors: a,
  formType: 'signup'
})

const mDTP = (dispatch, ownProps) => ({
  processForm: (currentUser) => dispatch(signup(currentUser)),
})


export default connect(mSTP, mDTP)(SessionForm)