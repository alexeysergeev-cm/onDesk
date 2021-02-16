import * as DeskMembershipsApiUtil from '../util/desk_memberships_api_util' 

export const CREATE_MEMBERSHIP = "CREATE_MEMBERSHIP"

const receiveMemebership = (payload) => {

  return({
    type: CREATE_MEMBERSHIP,
    payload
  })
}

export const createMemebership = (payload) => dispatch => (
  DeskMembershipsApiUtil.createMemebership(payload)
    
)