import * as DeskMembershipsApiUtil from '../util/desk_memberships_api_util' 

export const CREATE_MEMBERSHIP = "CREATE_MEMBERSHIP"

const receiveMembership = (payload) => {
  return({
    type: CREATE_MEMBERSHIP,
    payload
  })
}

export const createMembership = (payload) => dispatch => (
  DeskMembershipsApiUtil.createMembership(payload)
    .then((desk_user_ids) => dispatch(receiveMembership(desk_user_ids)))
)