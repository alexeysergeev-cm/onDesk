import { connect } from 'react-redux';
import { fetchDesk, updateDesk } from '../../actions/desk_actions';
import EditDesk from './desk_edit';

const mSTP = (state) => {
  return {
    errors: state.errors.desk
  };
}

const mDTP = (dispatch) => ({
  fetchDesk: (deskId) => dispatch(fetchDesk(deskId)),
  submitDesk: (desk) => dispatch(updateDesk(desk))
})

export default connect(mSTP, mDTP)(EditDesk)