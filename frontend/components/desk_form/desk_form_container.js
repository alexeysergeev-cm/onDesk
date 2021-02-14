import React from 'react';
import { connect } from 'react-redux';
import { createDesk } from '../../actions/desk_actions'
import DeskForm from './desk_form'
import { openModal, closeModal} from '../../actions/modal_actions';

const mSTP = state => ({
  formType: 'Create Desk'
})

const mDTP = dispatch => ({
  createDesk: (desk) => dispatch(createDesk(desk)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(DeskForm)