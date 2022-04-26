import DeskFromContainer from "../../desk_form/desk_form_container";

function DeskFormModal({ closeModal, defaultBackground }) {
  return (
    <div className="modal-card">
      <DeskFromContainer
        backgroundPics={defaultBackground}
        closeModal={closeModal}
      />
    </div>
  );
}

export default DeskFormModal;
