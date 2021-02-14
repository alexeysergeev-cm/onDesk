import { connect } from 'react-redux';
import DeskShow from './desk_show';
import { fetchDesk } from '../../actions/desk_actions';
import { selectDesk } from '../../reducers/selectors';


const mSTP = (state, ownParams) => {
  const deskId = parseInt(ownParams.match.params.deskId)
  const desk = selectDesk(state.entities, deskId)
  return({
    deskId,
    desk,
  }) 
}

const mDTP = dispatch => {
  return ({
    fetchDesk: id => dispatch(fetchDesk(id))
  })
}

export default connect(mSTP,mDTP)(DeskShow)