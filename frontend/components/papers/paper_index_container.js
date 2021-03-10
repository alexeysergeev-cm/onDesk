import {connect } from 'react-redux';
import PaperIndex from './paper_index'

const mSTP = state => {
  return ({
    papers: Object.values(state.entities.papers)
  })
}

const mDTP = dispatch => ({
  // createList: (list) => dispatch(createList(list)),
  // updateList: (list) => dispatch(updateList(list)),
  // deleteList: (listId) => dispatch(deleteList(listId))
})

export default connect(mSTP, mDTP)(PaperIndex)