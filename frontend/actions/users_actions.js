import * as UsersApiUtil from '../util/users_api_util';

export const FIND_USER = 'FIND_USER';

const findUser = (user) => {
  return({
    type: FIND_USER,
    user
  })
}

export const fetchUser = (email) => dispatch => (
  UsersApiUtil.fetchUser(email)
    .then((user) => dispatch(findUser(user)))
)