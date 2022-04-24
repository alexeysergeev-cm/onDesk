import PaperDescriptionContainer from "../../papers/paper_description_container";

function PaperDescriptionModal({ closeModal, title, listId, id, description }) {
  console.log("here")
  return (
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">{title}</p>
        <button
          className="delete"
          aria-label="close"
          onClick={closeModal}
        ></button>
      </header>
      <section className="modal-card-body">
        <PaperDescriptionContainer
          title={title}
          listId={listId}
          paperId={id}
          description={description}
        />
      </section>
    </div>
  );
}

export default PaperDescriptionModal;
