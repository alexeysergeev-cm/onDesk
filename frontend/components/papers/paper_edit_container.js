import { connect } from 'react-redux';
import { updatePaper } from '../../actions/paper_actions';
import EditPaper from './paper_edit'

const mSTP = (state, ownParams) => {
  const currUserId = state.session.currentUserId
  return ({
    currUserId
  })
}
const mDTP = (dispatch) => ({
  updatePaper: (paper) => dispatch(updatePaper(paper))
})
export default connect(mSTP, mDTP)(EditPaper)
