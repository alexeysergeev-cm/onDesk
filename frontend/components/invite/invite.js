import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useState, useRef } from "react";
import SearchContainer from "../desk_show/search_container";
import classnames from "classnames";
import "./invite.scss"
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

function Invite({ deskId }) {
  const [isDropdown, setIsDropDown] = useState(false);
  const ref = useRef()

  const clickInvite = useCallback(e => {
    e.stopPropagation();
    if (!isDropdown) {
      setIsDropDown(!isDropdown);
    }
  }, [setIsDropDown, isDropdown]);

  const clickOutside = useCallback(e => {
    e.stopPropagation()
    if (isDropdown) {
      setIsDropDown(false);
    }
  }, [setIsDropDown, isDropdown]);

  useOnClickOutside(ref, (e) => clickOutside(e));

  return (
    <div className="invite-members-section">
      <span className="board-header-btn-divider"></span>
      <div className="invite-btn" id="show-invite" onClick={(e) => clickInvite(e)}>
        <div className="invite-text" id="show-invite">
          <FontAwesomeIcon icon={faUserPlus} width="17px" />
          <span className="invite-btn-text">Share</span>
        </div>
        <ul
          className={classnames("invite-dropdown", {
            open: isDropdown,
          })}
          ref={ref}
        >
          <div className="invite-pop-over">
            <span style={{ fontSize: "16px" }}>Invite To Desk</span>
          </div>
          <div className="horizontal-divider"></div>
          <SearchContainer deskId={deskId} />
        </ul>
      </div>
    </div>
  );
}

export default Invite;
