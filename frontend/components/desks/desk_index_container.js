import { connect } from "react-redux";
import { fetchDesks } from "../../actions/desk_actions";
import DeskIndex from "./desk_index";
import { selectors } from "../../reducers/selectors";

const mapStateToProps = (state) => ({
  desks: selectors.getObjectValues(state.entities.desks),
  currentUserId: state.session.currentUserId,
});

const mapDispatchToProps = {
  fetchDesks,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeskIndex);
