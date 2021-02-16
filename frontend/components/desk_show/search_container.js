import { connect } from 'react-redux';
import Search from './search';
import { fetchUser } from '../../actions/users_actions'

const mSTP = state => {
  const user = state.entities.users
  debugger
  return({
    user
  })
}

const mDTP = dispatch => ({
  fetchUser: email => dispatch(fetchUser(email))
})

export default connect(mSTP,mDTP)(Search)