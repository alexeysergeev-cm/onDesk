import { connect } from "react-redux";
import ModalBase from "./modalBase";
import { selectors } from "../../reducers/selectors";
import { closeModal } from "../../actions/modal_actions";

const mSTP = (state) => ({
  modal: state.ui.modal,
});

const mDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(ModalBase);
