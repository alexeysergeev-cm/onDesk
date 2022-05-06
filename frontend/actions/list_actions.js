import * as ListUtil from "../util/list_api_util";

export const RECEIVE_LIST = "RECEIVE_LIST";
export const REMOVE_LIST = "REMOVE_LIST";
export const RECEIVE_TWO_LISTS = "RECEIVE_TWO_LISTS";
export const RECEIVE_LIST_ERROR = "RECEIVE_LIST_ERROR";

const receiveList = (list) => {
  return {
    type: RECEIVE_LIST,
    list,
  };
};

const removeList = (listId) => {
  return {
    type: REMOVE_LIST,
    listId,
  };
};

const receiveTwoList = (payload) => {
  return {
    type: RECEIVE_TWO_LISTS,
    payload,
  };
}

const receiveListError = (error) => ({
  type: RECEIVE_LIST_ERROR,
  error,
})

export const createList = (list) => (dispatch) =>
  ListUtil.createList(list).then((list) => dispatch(receiveList(list)));

export const updateList = (list) => (dispatch) =>
  ListUtil.updateList(list).then((list) => dispatch(receiveList(list)));

export const deleteList = (listId) => (dispatch) =>
  ListUtil.deleteList(listId).then(() => dispatch(removeList(listId)));

export const updateTwoLists = (listId, payload) => (dispatch) =>
  ListUtil.updateTwoLists(listId, payload)
    .then((payload) => dispatch(receiveTwoList(payload)))
    .fail((err) => dispatch(receiveListError(err.responseJSON)));
