import * as UsersApiUtil from "../util/users_api_util";

export const FIND_USER = "FIND_USER";
export const RECEIVE_INVITE_ERRORS = "RECEIVE_INVITE_ERRORS";

const findUser = (user) => {
  return {
    type: FIND_USER,
    user,
  };
};

const receiveErrors = (errors) => ({
  type: RECEIVE_INVITE_ERRORS,
  errors,
});

export const fetchUser = (email) => (dispatch) =>
  UsersApiUtil.fetchUser(email)
    .then((user) => dispatch(findUser(user)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)));
