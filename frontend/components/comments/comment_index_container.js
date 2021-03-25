import { connect } from 'react-redux';
import CommentIndex from './comment_index'
// import { deletePaper } from '../../actions/paper_actions'
// import { openModal } from '../../actions/modal_actions';

const mSTP = state => {
  return ({
    comments: state.entities.comments
  })
}

const mDTP = dispatch => ({
  // deletePaper: (paperId) => dispatch(deletePaper(paperId))
})

export default connect(mSTP, mDTP)(CommentIndex)