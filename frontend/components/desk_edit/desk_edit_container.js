import { connect } from 'react-redux';
import { fetchDesk, updateDesk } from '../../actions/desk_actions';
import EditDesk from './desk_edit';

const mSTP = (state, ownParams) => {
  const errors = state.errors.desk
  return({
    errors, 
  })
}

const mDTP = (dispatch) => ({
  fetchDesk: (deskId) => dispatch(fetchDesk(deskId)),
  submitDesk: (desk) => dispatch(updateDesk(desk))
})

export default connect(mSTP, mDTP)(EditDesk)