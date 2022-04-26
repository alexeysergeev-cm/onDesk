import { useRef, useState } from "react";
import classNames from "classnames";
import UploadPhotoModal from "../modal/uploadPhoto/uploadPhotoModal";
import { openModal } from "../../actions/modal_actions";
import { useDispatch } from "react-redux";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

function LogOutButton({ currentUser, logout, updatePhoto, handlePhotoFile }) {
  const [isActiveDropdown, setIsActiveDropdown] = useState(false);
  const dispatch = useDispatch();
  const ref = useRef();

  const photoUrl = currentUser.photoUrl;

  useOnClickOutside(ref, () => setIsActiveDropdown(false));

  return (
    <div
      className={classNames("dropdown is-right", {
        "is-active": isActiveDropdown,
      })}
      ref={ref}
    >
      <div className="dropdown-trigger btn-logout-home">
        <button
          className="button btn-logout is-rounded"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          style={{
            backgroundColor: currentUser.color,
            backgroundImage: `url(${photoUrl})`,
          }}
          onClick={() => setIsActiveDropdown(!isActiveDropdown)}
        >
          {!photoUrl && <span>{currentUser.username[0]}</span>}
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          <a className="dropdown-item">
            <p className="title is-5">Welcome {currentUser.username}</p>
            <p className="subtitle is-6">{currentUser.email}</p>
          </a>
          <hr className="dropdown-divider" />
          <a
            className="dropdown-item"
            onClick={() =>
              dispatch(
                openModal(
                  <UploadPhotoModal
                    handlePhotoFile={handlePhotoFile}
                    updatePhoto={updatePhoto}
                    photoUrl={photoUrl}
                  />
                )
              )
            }
          >
            Upload Photo
          </a>
          <hr className="dropdown-divider" />
          <a className="dropdown-item">Activity (coming soon)</a>
          <a className="dropdown-item">Settings (coming soon)</a>
          <a className="dropdown-item">Help (coming soon)</a>
          <hr className="dropdown-divider" />
          <a className="dropdown-item" onClick={() => logout()}>
            Log Out
          </a>
        </div>
      </div>
    </div>
  );
}

export default LogOutButton;
