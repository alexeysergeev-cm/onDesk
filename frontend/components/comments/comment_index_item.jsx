import { useCallback, useState } from "react";

function CommentIndexItem({
  comment,
  updateComment,
  deleteComment,
  currentUserId,
}) {
  const [body, setBody] = useState("");
  const [editing, setEditing] = useState(false);

  const update = useCallback((e) => {
    setBody(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      updateComment(body).then(() => setBody(""));
    },
    [body, setBody, updateComment]
  );

  const removeComment = useCallback(() => {
    deleteComment(comment.id);
  }, [deleteComment, comment.id]);

  return (
    <div className="comment-item">
      <div className="comment-author">
        {comment.username}
        <div className="time">{comment.time}</div>
      </div>
      {editing ? (
        <div className="comment-body">
          <input
            type="text"
            value={comment.body}
            onChange={(e) => update(e)}
            className="comment-edit-input"
          />
          <button className="upd-btn">Save</button>
        </div>
      ) : (
        <>
          <div className="comment-body">{comment.body}</div>
          {currentUserId === comment.author_id && (
            <div className="manipulate-comment">
              <div onClick={() => setEditing(!editing)}>Edit</div>
              <div onClick={removeComment}>Delete</div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default CommentIndexItem;
