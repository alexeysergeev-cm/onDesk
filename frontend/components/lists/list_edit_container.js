import { connect } from 'react-redux';
import { updateList } from '../../actions/list_actions';
import EditList from './list_edit';

const mSTP = (state, ownParams) => ({
  currUserId: state.session.currentUserId,
  list: ownParams.list,
});
    
const mDTP = (dispatch) => ({
  updateList: (list) => dispatch(updateList(list))
})

export default connect(mSTP, mDTP)(EditList)
