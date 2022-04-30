import { useCallback, useEffect, useState } from "react";
import CommentIndexContainer from "../../comments/comment_index_container";
import { updatePaper } from "../../../actions/paper_actions";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";
import { useEventListener } from '../../../hooks/useEventListener';

function PaperDescription({ title, paperId, description, listId, authorId }) {
  const [newDescritption, setNewDescription] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setNewDescription(description);
  }, [description, setNewDescription]);

  const update = (e) => {
    setNewDescription(e.target.value);
  };

  const debouncedUpdate = useCallback(
    debounce(
      () =>
        dispatch(
          updatePaper({
            id: paperId,
            title: title,
            description: newDescritption,
            list_id: listId,
          })
        ),
      200
    ),
    [title, paperId, newDescritption, listId]
  );

  useEventListener("change", debouncedUpdate);

  return (
    <div className="paper-description">
      <h2 className="paper-description-tag">Description</h2>
      <textarea
        value={newDescritption || ""}
        className="textarea"
        placeholder="Add additional description..."
        rows="10"
        onChange={update}
      ></textarea>
      <section>
        <CommentIndexContainer paperId={paperId} authorId={authorId} />
      </section>
    </div>
  );
}

export default PaperDescription;
