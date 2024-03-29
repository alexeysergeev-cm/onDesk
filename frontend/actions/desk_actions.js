import * as DeskUtil from "../util/desk_api_util";

export const RECEIVE_DESKS = "RECEIVE_DESKS";
export const RECEIVE_DESK = "RECEIVE_DESK";
export const RECEIVE_DESK_ERRORS = "RECEIVE_DESK_ERRORS";
export const REMOVE_DESK = "REMOVE_DESK";
export const DESK_SYNC = "DESK_SYNC";

const receiveDesks = (desks) => ({
  type: RECEIVE_DESKS,
  desks,
});

const receiveDesk = (payload) => ({
  type: RECEIVE_DESK,
  payload,
});

const receiveDeskErrors = (errors) => ({
  //array
  type: RECEIVE_DESK_ERRORS,
  errors,
});

const removeDesk = (deskId) => ({
  type: REMOVE_DESK,
  deskId,
});

const receiveDeskSync = (data) => ({
  type: DESK_SYNC,
  data,
})

export const fetchDesks = () => (dispatch) =>
  DeskUtil.fetchDesks()
    .then((desks) => dispatch(receiveDesks(desks)))
    .fail((errors) => dispatch(receiveDeskErrors(errors.responseJSON)));

export const fetchDesk = (id) => (dispatch) =>
  DeskUtil.fetchDesk(id)
    .then((payload) => dispatch(receiveDesk(payload)))
    .fail((errors) => dispatch(receiveDeskErrors(errors.responseJSON)));

export const createDesk = (desk) => (dispatch) =>
  DeskUtil.createDesk(desk)
    .then((createdDesk) => dispatch(receiveDesk(createdDesk)))
    .fail((errors) => dispatch(receiveDeskErrors(errors.responseJSON)));

export const updateDesk = (desk) => (dispatch) =>
  DeskUtil.updateDesk(desk)
    .then((updatedDesk) => dispatch(receiveDesk(updatedDesk)))
    .fail((errors) => dispatch(receiveDeskErrors(errors.responseJSON)));

export const deleteDesk = (deskId) => (dispatch) =>
  DeskUtil.deleteDesk(deskId)
    .then(() => dispatch(removeDesk(deskId)))
    .fail((errors) => dispatch(receiveDeskErrors(errors.responseJSON)));

export const deskSync = (data) => (dispatch) => dispatch(receiveDeskSync(data));