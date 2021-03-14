import { connect } from 'react-redux';
import { updateList } from '../../actions/list_actions';
import EditList from './list_edit';

const mSTP = (state, ownParams) => {
  const currUserId = state.session.currentUserId
  return ({
    currUserId
  })
}
const mDTP = (dispatch) => ({
  updateList: (list) => dispatch(updateList(list))
})
export default connect(mSTP, mDTP)(EditList)
