import { connect } from 'react-redux';
import CommentIndex from './comment_index'
import { createComment, updateComment, deleteComment } from '../../actions/comment_actions'

const mSTP = state => {
  const currUserId = state.session.currentUserId
  return ({
    comments: state.entities.comments,
    currUserId
  })
}

const mDTP = dispatch => ({
  createComment: (comment) => dispatch(createComment(comment)),
  updateComment: (comment) => dispatch(updateComment(comment)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),
})

export default connect(mSTP, mDTP)(CommentIndex)