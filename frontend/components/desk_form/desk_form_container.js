import { connect } from "react-redux";
import { createDesk } from "../../actions/desk_actions";
import DeskForm from "./desk_form";
import { closeModal } from "../../actions/modal_actions";
import { clearErrors } from "../../actions/clear_errors_actions";

const mapStateToProps = (state) => {
  let keys = Object.keys(state.entities.desks);
  let lastId = keys[keys.length - 1];
  const currentUserId = state.session.currentUserId;
  const error = state.errors.desk[0];

  return {
    currentUserId,
    lastId,
    formType: "Create Desk",
    error: error,
  };
};

const mapDispatchToProps = {
  createDesk,
  closeModal,
  clearErrors,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeskForm);
