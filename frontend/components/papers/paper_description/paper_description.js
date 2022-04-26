import CommentIndexContainer from "../../comments/comment_index_container";

function PaperDescription({ title, paperId, description, listId, authorId }) {
  // const []


  const handleSubmit = () => {};

  const update = () => {};

  return (
    <div className="paper-description">
      <h2 className="paper-description-tag">Description</h2>
      <textarea
        class="textarea"
        placeholder="Add additional description..."
        rows="10"
      ></textarea>
      <section>
        <CommentIndexContainer paperId={paperId} authorId={authorId} />
      </section>
    </div>
  );
} 


export default PaperDescription;