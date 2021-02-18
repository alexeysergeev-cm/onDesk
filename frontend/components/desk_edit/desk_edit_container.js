import { connect } from 'react-redux';
import { fetchDesk, updatedDesk } from '../../actions/desk_actions';
import EditDesk from './desk_edit';

const mSTP = (state, ownParams) => ({
  desk: state.desk[ownParams.match.props.deskId],
  formType: 'Update Desk'
})

const mDTP = (dispatch) => ({
  fetchDesk: (deskId) => dispatch(fetchDesk(deskId)),
  submitDesk: (desk) => dispatch(updatedDesk(desk))
})

export default connect(mSTP, mDTP)(EditDesk)