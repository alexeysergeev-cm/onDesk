import { useState } from "react";
import classNames from "classnames";
import ModalDynamic from "../modal/modalDynamic";

function LogOutButton({ currentUser, logout }) {
  const [isActiveDropdown, setIsActiveDropdown] = useState(false);

  return (
    <div
      class={classNames("dropdown is-right", {
        "is-active": isActiveDropdown,
      })}
    >
      <div class="dropdown-trigger btn-logout-home">
        <button
          class="button btn-logout is-rounded"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          style={{ backgroundColor: currentUser.color }}
          onClick={() => setIsActiveDropdown(!isActiveDropdown)}
        >
          <span>{currentUser.username[0]}</span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a href="#" class="dropdown-item">
            <p class="title is-5">Welcome {currentUser.username}</p>
            <p class="subtitle is-6">{currentUser.email}</p>
          </a>
          <hr class="dropdown-divider" />
          <a
            class="dropdown-item js-modal-trigger"
            data-target="modal-js-example"
          >
            Upload Photo
          </a>
          <hr class="dropdown-divider" />
          <a href="#" class="dropdown-item">
            Activity (coming soon)
          </a>
          <a href="#" class="dropdown-item">
            Settings (coming soon)
          </a>
          <a href="#" class="dropdown-item">
            Help (coming soon)
          </a>
          <hr class="dropdown-divider" />
          <a href="#" class="dropdown-item" onClick={() => logout()}>
            Log Out
          </a>
        </div>
      </div>
    </div>
  );
}

export default LogOutButton;
{
  /*
// <div className="btn-logout-home">
//       <button
//         className="btn-logout"
//         style={{ backgroundColor: this.props.currentUser.color }}
//         onClick={this.clickDropDown}
//       >
//         <div onClick={this.clickDropDown}>{name[0]}</div>
//         <ul className="home-dropdown">
//           <li style={{ fontWeight: "600" }}>Welcome {name}</li>
//           <i className="fa fa-times" onClick={this.closeMenu}></i>
//           <li className="shadowed-text">{currentUser.email}</li>
//           <hr className="Solid" />
//           <form onSubmit={this.updatePhoto} className="add-photo">
//             <label>Choose profile picture</label>
//             <input type="file" onChange={this.handleFile} />
//             <input type="submit" value="Submit Picture" />
//           </form>
//           <hr className="Solid" />
//           <li style={{ border: "1px solid black", padding: "8px 0" }}>
//             Settings (coming soon)
//           </li>
//           <hr className="Solid" />
//           <li onClick={() => logout()}>Log Out</li>
//         </ul>
//       </button>
//     </div>
*/
}
