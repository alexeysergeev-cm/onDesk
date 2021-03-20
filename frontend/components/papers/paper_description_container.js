import { connect } from 'react-redux';
import { updatePaper } from '../../actions/paper_actions'
import PaperDescritption from './paper_description';
import { closeModal } from '../../actions/modal_actions';

const mSTP = state => {
  const currUserId = state.session.currentUserId
  const papers = Object.values(state.entities.papers)
  // debugger
  return ({
    currUserId,
    papers
  })
}

const mDTP = dispatch => ({
  updatePaper: (paper) => dispatch(updatePaper(paper)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(PaperDescritption)