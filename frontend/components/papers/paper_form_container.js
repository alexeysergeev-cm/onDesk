import { connect } from 'react-redux';
import { createPaper } from '../../actions/paper_actions'
import { updateList } from '../../actions/list_actions';

import PaperForm from './paper_form'


const mSTP = state => {
  const currentUserId = state.session.currentUserId
  const papers = state.entities.papers
  const lists = state.entities.lists
  return({
    currentUserId,
    papers,
    lists
  })
}

const mDTP = dispatch => ({
  createPaper: (paper) => dispatch(createPaper(paper)),
  updateList: (list) => dispatch(updateList(list))
})

export default connect(mSTP, mDTP)(PaperForm)