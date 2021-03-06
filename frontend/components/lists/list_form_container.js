import { connect } from 'react-redux';
import { createList } from '../../actions/list_actions'
import { updateDesk } from '../../actions/desk_actions';
import ListForm from './list_form'


const mSTP = (state, ownParams) => {
  const currentUserId = state.session.currentUserId
  return({
    currentUserId,
  })
}

const mDTP = dispatch => ({
  createList: (list) => dispatch(createList(list)),
  updateDesk: (desk) => dispatch(updateDesk(desk))
})

export default connect(mSTP, mDTP)(ListForm)