import { useCallback, useEffect, useState, useRef } from "react";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import classNames from "classnames";
import { pressEnter } from "../../functions/functions";

function CommentForm({ createComment, authorId, paperId }) {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const ref = useRef();

  const update = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [setText]
  );

  const saveComment = useCallback(() => {
    createComment({
      body: text,
      paper_id: paperId,
      author_id: authorId,
    }).then(() => {
      setText("");
      setIsTyping(false);
    });
  }, [createComment, text, paperId, authorId, setIsTyping, setText]);

  useOnClickOutside(ref, () => setIsTyping(false));

  return (
    <div
      className="comment-form"
      ref={ref}
      onKeyDown={(e) => pressEnter(e, saveComment)}
    >
      <input
        type="text"
        value={text}
        onChange={update}
        placeholder="Write a comment..."
        className={classNames("comment-form-input", { "is-typing": isTyping })}
        onClick={() => setIsTyping(true)}
      />
      {isTyping && (
        <div
          className="button is-link is-outlined is-small"
          onClick={() => saveComment()}
        >
          Save
        </div>
      )}
    </div>
  );
}

export default CommentForm;
