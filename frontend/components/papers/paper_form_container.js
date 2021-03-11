import { connect } from 'react-redux';
import { createPaper } from '../../actions/paper_actions'

import PaperForm from './paper_form'


const mSTP = state => {
  const currentUserId = state.session.currentUserId
  // const deskId = Object.keys(state.entities.desks)[0]
  return({
    currentUserId,
    // deskId
  })
}

const mDTP = dispatch => ({
  createPaper: (paper) => dispatch(createPaper(paper)),
})

export default connect(mSTP, mDTP)(PaperForm)