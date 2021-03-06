import {connect } from 'react-redux';
import { createList, updateList, deleteList } from '../../actions/list_actions';
import { updateDesk } from '../../actions/desk_actions';
import { updatePaper } from '../../actions/paper_actions';
import ListIndex from './list_index'

const mSTP = state => {
  return ({
    lists: state.entities.lists,
    papers: state.entities.papers
  })
}

const mDTP = dispatch => ({
  createList: (list) => dispatch(createList(list)),
  updateList: (list) => dispatch(updateList(list)),
  deleteList: (listId) => dispatch(deleteList(listId)),
  updateDesk: (desk) => dispatch(updateDesk(desk)),
  updatePaper: (paper) => dispatch(updatePaper(paper))
})

export default connect(mSTP, mDTP)(ListIndex)