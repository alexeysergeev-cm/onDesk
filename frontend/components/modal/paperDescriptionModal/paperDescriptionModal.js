import PaperDescription from "../../papers/paper_description/paper_description";
import "./paperDescriptionModal.scss";


function PaperDescriptionModal({ closeModal, title, listId, id, description }) {
  
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
      <section className="modal-card-body paper-details">
        <PaperDescription
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
