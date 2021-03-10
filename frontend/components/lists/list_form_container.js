import { connect } from 'react-redux';
import { createList } from '../../actions/list_actions'

import ListForm from './list_form'


const mSTP = state => {
  const currentUserId = state.session.currentUserId
  const deskId = Object.keys(state.entities.desks)[0]
  return({
    currentUserId,
    deskId
  })
}

const mDTP = dispatch => ({
  createList: (list) => dispatch(createList(list)),
})

export default connect(mSTP, mDTP)(ListForm)