import * as DeskMembershipsApiUtil from "../util/desk_memberships_api_util";

export const CREATE_MEMBERSHIP = "CREATE_MEMBERSHIP";
export const DELETE_MEMBERSHIP = "DELETE_MEMBERSHIP";
export const RECEIVE_MEMBERSHIP_ERRORS = "RECEIVE_MEMBERSHIP_ERRORS";

const receiveMembership = (payload) => {
  return {
    type: CREATE_MEMBERSHIP,
    payload,
  };
};

const receiveUpdatedMembers = (payload) => {
  return {
    type: DELETE_MEMBERSHIP,
    payload,
  };
}

const receiveMembershipErrors = (errors) => ({
  type: RECEIVE_MEMBERSHIP_ERRORS,
  errors,
});

export const createMembership = (payload) => (dispatch) =>
  DeskMembershipsApiUtil.createMembership(payload)
    .then((desk_user_ids) => dispatch(receiveMembership(desk_user_ids)))
    .fail((errors) => dispatch(receiveMembershipErrors(errors.responseJSON)));


export const deleteMembership = (id) => (dispatch) =>
  DeskMembershipsApiUtil.deleteMembership(id)
    .then((members) => dispatch(receiveUpdatedMembers(members)))
    .fail((errors) => dispatch(receiveMembershipErrors(errors.responseJSON)));