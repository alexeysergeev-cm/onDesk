import React from "react";
import CommentIndexItem from "./comment_index_item";
import CommentForm from "./comment_form.js";

class CommentIndex extends React.Component {
  render() {
    const { paperId, comments, createComment, updateComment, deleteComment } =
      this.props;

    return (
      <div className="comments-container">
        <h1 className="comments-activity">
          <i className="fa fa-comments-o" aria-hidden="true"></i>
          Activity
        </h1>
        <CommentForm paperId={paperId} createComment={createComment} />
        <div className="comments-box">
          {Object.values(comments)
            .reverse()
            .map((comment) => {
              if (comment.paper_id === paperId) {
                return (
                  <div key={comment.id}>
                    <CommentIndexItem
                      comment={comment}
                      updateComment={updateComment}
                      deleteComment={deleteComment}
                    />
                  </div>
                );
              }
            })}
        </div>
      </div>
    );
  }
}

export default CommentIndex;
