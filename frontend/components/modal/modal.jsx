import React from 'react'
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

import DeskFromContainer from '../desk_form/desk_form_container';
import PaperDescriptionContainer from '../papers/paper_description_container';

function Modal({modal, closeModal}){
  if (!modal){
    return null;
  }
  let component;
  switch (modal) {
    case 'Create Desk':
      component = <DeskFromContainer />;
      break;
    case 'Add Description':
      component = <PaperDescriptionContainer />;
      break;
    default:
      return null;
  }

  return(
    <div className='modal-background' onClick={closeModal}>
      <div className='modal-child' onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  )
}

const mSTP = state => ({
  modal: state.ui.modal
})

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(Modal)


