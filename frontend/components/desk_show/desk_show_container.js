import { connect } from 'react-redux';
import DeskShow from './desk_show';
import { fetchDesk, deleteDesk } from '../../actions/desk_actions';
import { selectDesk } from '../../reducers/selectors';
import { clearErrors } from '../../actions/clear_errors_actions'

const mSTP = (state, ownParams) => {
  const deskId = parseInt(ownParams.match.params.deskId)
  const title = selectDesk(state.entities, deskId)
  const deskErr = state.errors.desk
  const currUserId = state.session.currentUserId
  return({
    deskId,
    title,
    deskErr,
    currUserId
  }) 
}

const mDTP = dispatch => {
  return ({
    fetchDesk: id => dispatch(fetchDesk(id)),
    deleteDesk: deskId => dispatch(deleteDesk(deskId)),
    clearErrors: () => dispatch(clearErrors()),
  })
}

export default connect(mSTP,mDTP)(DeskShow)