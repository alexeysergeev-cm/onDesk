import { connect } from 'react-redux';
import { fetchDesk } from '../../actions/desk_actions';
import DeskShow from './desk_show';

const mSTP = (state) => ({
  
})

const mDTP = dispatch => ({
  fetchDesk: id => dispatch(fetchDesk(id))
})

export default connect(mSTP,mDTP)(DeskShow)