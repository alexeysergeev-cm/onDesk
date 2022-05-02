import { connect } from "react-redux";
import CommentIndex from "./comment_index";
import {
  createComment,
  updateComment,
  deleteComment,
} from "../../actions/comment_actions";
import { selectors } from "../../reducers/selectors";

const mapStateToProps = (state) => ({
  comments: selectors.getObjectValues(state.entities.comments),
  currentUserId: state.session.currentUserId,
});

const mapDispatchToProps = {
  createComment,
  updateComment,
  deleteComment,
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
