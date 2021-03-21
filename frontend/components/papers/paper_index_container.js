import {connect } from 'react-redux';
import PaperIndex from './paper_index'
import { deletePaper } from '../../actions/paper_actions'
import { openModal } from '../../actions/modal_actions';

const mSTP = state => {
  return ({
    papers: Object.values(state.entities.papers)
  })
}

const mDTP = dispatch => ({
  openModal: (modal) => dispatch(openModal(modal)),
  deletePaper: (paperId) => dispatch(deletePaper(paperId))
})

export default connect(mSTP, mDTP)(PaperIndex)