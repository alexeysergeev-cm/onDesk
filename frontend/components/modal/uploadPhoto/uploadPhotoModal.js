import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function UploadPhotoModal({
  closeModal,
  photoUrl,
  updatePhoto,
  handlePhotoFile,
}) {
  const [imageUrl, setImageUrl] = useState("");

  const handleFile = (e) => {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];

    reader.onloadend = () => {
      setImageUrl(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }

    handlePhotoFile(e);
  };

  return (
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">Upload Photo</p>
        <button className="delete" aria-label="close" onClick={closeModal}></button>
      </header>
      <section className="modal-card-body">
        <figure className="image is-256x256">
          <img src={imageUrl || photoUrl} alt="" className="is-rounded" />
        </figure>
        <div className="file">
          <label className="file-label">
            <input className="file-input" type="file" onChange={handleFile} />
            <span className="file-cta">
              <span className="file-icon">
                <FontAwesomeIcon icon={faUpload} />
              </span>

              <span className="file-label">Choose a file…</span>
            </span>
          </label>
        </div>
      </section>
      <footer className="modal-card-foot">
        <button
          className="button is-success"
          onClick={(e) => {
            updatePhoto(e);
            closeModal();
          }}
        >
          Save changes
        </button>
        <button className="button" onClick={closeModal}>
          Cancel
        </button>
      </footer>
    </div>
  );
}

export default UploadPhotoModal;
