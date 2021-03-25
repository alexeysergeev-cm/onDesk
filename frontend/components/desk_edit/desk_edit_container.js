import { connect } from 'react-redux';
import { fetchDesk, updateDesk } from '../../actions/desk_actions';
import EditDesk from './desk_edit';

const mSTP = (state, ownParams) => {
  // return({
  //   desk: state.entities.desks[ownParams.match.props.deskId],
  //   formType: 'Update Desk'
  // })
}

const mDTP = (dispatch) => ({
  fetchDesk: (deskId) => dispatch(fetchDesk(deskId)),
  submitDesk: (desk) => dispatch(updateDesk(desk))
})

export default connect(null, mDTP)(EditDesk)