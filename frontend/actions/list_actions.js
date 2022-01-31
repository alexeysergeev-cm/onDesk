import * as ListUtil from "../util/list_api_util";

export const RECEIVE_LIST = "RECEIVE_LIST";
export const REMOVE_LIST = "REMOVE_LIST";

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

//fetch all lists??

// export const fetchLists = () => dispatch => {
//   ListUtil.fetchLists()
//     .then((list) => dispatch(receiveList(list)))
//     .fail((errors) => dispatch(receiveListErrors(errors.responseJSON)))
// }

export const createList = (list) => (dispatch) =>
  ListUtil.createList(list).then((list) => dispatch(receiveList(list)));

export const updateList = (list) => (dispatch) =>
  ListUtil.updateList(list).then((list) => dispatch(receiveList(list)));

export const deleteList = (listId) => (dispatch) =>
  ListUtil.deleteList(listId).then(() => dispatch(removeList(listId)));
