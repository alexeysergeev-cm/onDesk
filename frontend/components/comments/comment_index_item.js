import { useCallback, useEffect, useState, useRef } from "react";
import { pressEnter } from "../../functions/functions";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

function CommentIndexItem({
  comment,
  updateComment,
  deleteComment,
  currentUserId,
}) {
  const [body, setBody] = useState("");
  const [editing, setEditing] = useState(false);
  const ref = useRef();
  const inputRef = useRef();

  useEffect(() => {
    setBody(comment.body);
  }, [comment]);

  useEffect(() => {
    if (!editing) return;
    inputRef.current.focus();
  }, [editing, inputRef]);

  const update = useCallback(
    (e) => {
      setBody(e.target.value);
    },
    [setBody]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      updateComment({ id: comment.id, body }).then(() => {
        setEditing(false);
      });
    },
    [body, setBody, updateComment, comment.id, setEditing]
  );

  const removeComment = useCallback(() => {
    deleteComment(comment.id);
  }, [deleteComment, comment.id]);

  useOnClickOutside(ref, () => setEditing(false));

  return (
    <div className="comment-item">
      <div className="comment-author">
        <div className="comment-author-name">{comment.username}</div>
        <div className="time">{comment.time}</div>
      </div>
      {editing ? (
        <div
          className="comment-body"
          onKeyDown={(e) => pressEnter(e, handleSubmit)}
          ref={ref}
        >
          <input
            type="text"
            value={body}
            onChange={update}
            className="comment-edit-input is-typing"
            ref={inputRef}
          />
          <div
            className="button is-link is-outlined is-small"
            onClick={(e) => handleSubmit(e)}
          >
            Save
          </div>
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
