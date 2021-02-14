import { connect } from 'react-redux';
import { createDesk } from '../../actions/desk_actions'
import DeskForm from './desk_form'

const mSTP = state => ({

})

const mDTP = dispatch => ({
  createDesk: (desk) => dispatch(createDesk(desk))
})

export default connect(null, mDTP)(DeskForm)