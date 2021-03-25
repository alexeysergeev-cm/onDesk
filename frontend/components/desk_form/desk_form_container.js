
import { connect } from 'react-redux';
import { createDesk } from '../../actions/desk_actions'
import DeskForm from './desk_form'
import { closeModal } from '../../actions/modal_actions';

const mSTP = state => {
  let keys = Object.keys(state.entities.desks)
  let lastId = keys[keys.length - 1]
  const currentUserId = state.session.currentUserId
  return({
    currentUserId,
    lastId,
    formType: 'Create Desk'
  })
}

const mDTP = dispatch => ({
  createDesk: (desk) => dispatch(createDesk(desk)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(DeskForm)