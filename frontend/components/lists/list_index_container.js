import {connect } from 'react-redux';
import { createList, updateList, deleteList } from '../../actions/list_actions';
import ListIndex from './list_index'

const mSTP = state => {
  debugger
  return ({
    lists: Object.values(state.entities.lists)
  })
}

const mDTP = dispatch => ({
  createList: (list) => dispatch(createList(list)),
  updateList: (list) => dispatch(updateList(list)),
  deleteList: (listId) => dispatch(deleteList(listId))
})

export default connect(mSTP, mDTP)(ListIndex)