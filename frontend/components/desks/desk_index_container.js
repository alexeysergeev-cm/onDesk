import {connect } from 'react-redux';
import DeskIndex from './desk_index'

const mSTP = state => ({
  desks: state.desks
})

const mDTP = dispatch => ({

})

export default connect(mSTP, mDTP)(DeskIndex)