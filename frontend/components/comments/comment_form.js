import { useCallback, useEffect, useState, useRef } from "react";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import classNames from "classnames";
function CommentForm() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const ref = useRef();

  const update = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [setText]
  );

  useOnClickOutside(ref, () => setIsTyping(false));

  return (
    <div className="comment-form">
      <input
        type="text"
        value={text}
        onChange={update}
        placeholder="Write a comment..."
        ref={ref}
        className={classNames("comment-form-input", { "is-typing": isTyping })}
        onClick={() => setIsTyping(true)}
      />
      {isTyping && (
        <div className="button is-link is-outlined is-small">Save</div>
      )}
    </div>
  );
}

export default CommentForm;
