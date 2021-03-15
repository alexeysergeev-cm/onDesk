import React from 'react'
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

import DeskFromContainer from '../desk_form/desk_form_container';
import PaperDescriptionContainer from '../papers/paper_description_container';

function Modal({modal, closeModal}){
  if (!modal){
    return null;
  }

  let title;
  let listId;
  let paperId;
  if (typeof modal !== String){
    let props = Object.values(modal)
    modal = Object.keys(modal)[0]
    // debugger
    title = props[0][0]
    listId = props[0][1]
    paperId = props[0][2]
  }

  let component;
  switch (modal) {
    case 'Create Desk':
      component = <DeskFromContainer />;
      break;
    case 'Add Description':
    // debugger
      component = <PaperDescriptionContainer 
        title={title}
        listId={listId}
        paperId={paperId}
      />;
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


