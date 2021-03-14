import {connect } from 'react-redux';
import PaperIndex from './paper_index'
import { deletePaper } from '../../actions/paper_actions'

const mSTP = state => {
  return ({
    papers: Object.values(state.entities.papers)
  })
}

const mDTP = dispatch => ({
  // createList: (list) => dispatch(createList(list)),
  // updateList: (list) => dispatch(updateList(list)),
  deletePaper: (paperId) => dispatch(deletePaper(paperId))
})

export default connect(mSTP, mDTP)(PaperIndex)