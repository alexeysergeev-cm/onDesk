import CommentIndexItem from "./comment_index_item";
import CommentForm from "./comment_form.js";

function CommentIndex({
  comments,
  paperId,
  updateComment,
  createComment,
  deleteComment,
  currentUserId
}) {
  return (
    <div className="comments-container">
      <h1 className="comments-activity">
        <i className="fa fa-comments-o" aria-hidden="true"></i>
        Activity
      </h1>
      <CommentForm paperId={paperId} createComment={createComment} />
      <div className="comments-box">
        {comments.reverse().map((comment) => {
          if (comment.paper_id === paperId) {
            return (
              <div key={comment.id}>
                <CommentIndexItem
                  comment={comment}
                  updateComment={updateComment}
                  deleteComment={deleteComment}
                  currentUserId={currentUserId}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default CommentIndex;
