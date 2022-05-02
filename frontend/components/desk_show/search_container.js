import { connect } from "react-redux";
import Search from "./search";
import { fetchUser } from "../../actions/users_actions";
import { createMembership } from "../../actions/desk_memberships_actions";
import { clearErrors, clearMessage } from "../../actions/clear_errors_actions";

const mapStateToProps = (state) => {
  const message = state.deskMembership.message;
  const errors = state.errors.invite;
  const membershipErr = state.errors.membership;
  const users = state.entities.users;

  return {
    users,
    errors,
    message,
    membershipErr,
  };
};

const mapDispatchToProps = {
  fetchUser,
  createMembership,
  clearErrors,
  clearMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
