import { connect } from 'react-redux';
import DeskShow from './desk_show';
import { fetchDesk } from '../../actions/desk_actions';

const mSTP = (state, ownParams) => ({
  deskId: ownParams.match.params.deskId
})

const mDTP = dispatch => {
  debugger
  return ({

    fetchDesk: id => dispatch(fetchDesk(id))
  })
}

export default connect(mSTP,mDTP)(DeskShow)