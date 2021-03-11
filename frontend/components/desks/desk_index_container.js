import {connect } from 'react-redux';
import { fetchDesks } from '../../actions/desk_actions';
import DeskIndex from './desk_index'

const mSTP = state => {
  return ({
    desks: Object.values(state.entities.desks),
    currentUserId: state.session.currentUserId 
  })
}

const mDTP = dispatch => ({
  fetchDesks: () => dispatch(fetchDesks())
})

export default connect(mSTP, mDTP)(DeskIndex)