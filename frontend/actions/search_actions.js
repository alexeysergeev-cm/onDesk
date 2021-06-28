import * as SearchApiUtil from '../util/search_api_util';

export const SEARCH_ITEMS = 'SEARCH_ITEMS';

const receiveItems = (items) => {
  return ({
    type: SEARCH_ITEMS,
    items
  })
}


export const searchItems = (word) => dispatch => {
  return (
    SearchApiUtil.searchItems(word)
      .then((items) => dispatch(receiveItems(items)))
    // .fail((errors) => dispatch(receiveDeskErrors(errors.responseJSON)))
  )
}


