import { connect } from "react-redux";
import { createList } from "../../actions/list_actions";
import { updateDesk } from "../../actions/desk_actions";
import ListForm from "./list_form";

const mapStateToProps = (state) => ({
  currentUserId: state.session.currentUserId,
});

const mapDispatchToProps = {
  createList,
  updateDesk,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListForm);
