import * as DeskMembershipsApiUtil from '../util/desk_memberships_api_util' 

export const CREATE_MEMBERSHIP = "CREATE_MEMBERSHIP"

const receiveMemebership = (payload) => {
  debugger
  return({
    type: CREATE_MEMBERSHIP,
    payload
  })
}

export const createMemebership = (payload) => dispatch => (
  DeskMembershipsApiUtil.createMemebership(payload)
    .then((desk_user_ids) => dispatch(receiveMemebership(desk_user_ids)))
)