import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";

import DeskFromContainer from "../desk_form/desk_form_container";
import PaperDescriptionContainer from "../papers/paper_description_container";

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  console.log(modal);
  let backgroundPics;
  if (modal[0] === "Create Desk") {
    backgroundPics = modal[1];
    modal = "Create Desk";
  }
  // debugger
  //pass props if modal comes as object
  let title;
  let listId;
  let paperId;
  let description;
  if (typeof modal !== "string") {
    let props = Object.values(modal);
    modal = Object.keys(modal)[0];
    title = props[0][0];
    listId = props[0][1];
    paperId = props[0][2];
    description = props[0][3];
  }

  let component;
  switch (modal) {
    case "Create Desk":
      component = <DeskFromContainer backgroundPics={backgroundPics} />;
      break;
    case "Add Description":
      component = (
        <PaperDescriptionContainer
          title={title}
          listId={listId}
          paperId={paperId}
          description={description}
        />
      );
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mSTP = (state) => ({
  modal: state.ui.modal,
});

const mDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(Modal);
