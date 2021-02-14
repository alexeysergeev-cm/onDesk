import * as DeskUtil from '../util/desk_api_util'

export const RECEIVE_DESKS = 'RECEIVE_DESKS'
export const RECEIVE_DESK = 'RECEIVE_DESK'
export const RECEIVE_DESK_ERRORS = 'RECEIVE_DESK_ERRORS'


const receiveDesks = (desks) => ({
  type: RECEIVE_DESKS,
  desks
})

const receiveDesk = ({desk}) => ({
  type: RECEIVE_DESK,
  desk
})

const receiveDeskErrors = (errors) => ({ //array
  type: RECEIVE_DESK_ERRORS,
  errors
})


export const fetchDesks = () => dispatch => (
  DeskUtil.fetchDesks()
    .then((desks) => dispatch(receiveDesks(desks)))
    .fail((errors) => dispatch(receiveDeskErrors(errors)))
)

export const fetchDesk = (id) => dispatch => (
  DeskUtil.fetchDesk(id)
    .then((payload) => dispatch(receiveDesk(payload)))
    .fail(errors => dispatch(receiveDeskErrors(errors)))
)

export const createDesk = (desk) => dispatch => (
  DeskUtil.createDesk(desk)
    .then(createdDesk => dispatch(receiveDesk(createdDesk)))
    .fail(errors => dispatch(receiveDeskErrors(errors)))
)