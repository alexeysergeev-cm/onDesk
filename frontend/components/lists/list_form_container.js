import { connect } from 'react-redux';
import { createList } from '../../actions/desk_actions'
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

})

export default connect(mSTP, mDTP)(ListForm)