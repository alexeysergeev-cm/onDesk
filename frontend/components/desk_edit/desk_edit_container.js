import { connect } from "react-redux";
import { fetchDesk, updateDesk } from "../../actions/desk_actions";
import EditDesk from "./desk_edit";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.desk,
  };
};

const mapDispatchToProps = { fetchDesk, updateDesk };

export default connect(mapStateToProps, mapDispatchToProps)(EditDesk);
