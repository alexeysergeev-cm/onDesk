import { connect } from "react-redux";
import DeskShow from "./desk_show";
import { fetchDesk, deleteDesk } from "../../actions/desk_actions";
import { selectors } from "../../reducers/selectors";
import { clearErrors } from "../../actions/clear_errors_actions";

const mapStateToProps = (state, ownProps) => {
  const deskId = ownProps.match.params.deskId;
  const title = selectors.getDeskTitle(state.entities, deskId);
  const deskErr = state.errors.desk;
  const currUserId = state.session.currentUserId;
  const desk = state.entities.desks;
  const deskMembers = selectors.getDeskMembers(state.entities.deskMembers);
  const membershipIds = selectors.getDeskMembershipIds(
    state.entities.deskMembers
  );

  return {
    deskId,
    title,
    deskErr,
    currUserId,
    desk,
    deskMembers,
    membershipIds,
  };
};

const mapDispatchToProps = {
  fetchDesk,
  deleteDesk,
  clearErrors,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeskShow);
