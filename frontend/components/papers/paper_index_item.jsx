import React from 'react';
import PaperEditContainer from './paper_edit_container'

class PaperIndexItem extends React.Component{
  constructor(props){
    super(props)


    this.titleUpdate = this.titleUpdate.bind(this)
    this.clickPaperItem = this.clickPaperItem.bind(this)
  }

  titleUpdate(e){
    e.stopPropagation();
    e.target.offsetParent.offsetParent.firstChild.style.display = 'none'
    e.target.offsetParent.offsetParent.lastChild.style.display = 'none'
    e.target.parentNode.parentElement.parentElement.children[1].style.display = 'flex'
    e.target.parentNode.parentElement.parentElement.children[1].firstElementChild.firstChild.focus()
  }

  clickPaperItem(e){
    const { title, id, description } = this.props.paper
    const { listId, openModal } = this.props
    if (e.currentTarget.children[1].style.display !== 'flex' && e.target.innerText !== "Delete Paper"){
      openModal({'Add Description': [title, listId, id, description]})
    } 
  }

  render(){
    const { title, id, description } = this.props.paper
    const { listId, openModal } = this.props
    return(
      <>
        <div className='single-paper' onClick={this.clickPaperItem}>
          <div className='paper-title'>
            {title}
          </div>
          <div className='paper-edit-container'>
            <PaperEditContainer
              listId={listId}
              paperId={id}
            />
          </div>
          <div className='paper-extras'>
            <i className="fa fa-pencil" aria-hidden="true"></i>
            <div className='delete-paper'>
              <h5>Paper Actions</h5>
              <hr className="Solid"/>
              <div onClick={this.titleUpdate}>Update Title</div>
              <div onClick={() => openModal({'Add Description': [title, listId, id, description]})}>Add Description</div>
              <div onClick={() => this.props.deletePaper(id)}>Delete Paper</div>
            </div>
          </div>
          
        </div>
      </>
    )
  }
}

export default PaperIndexItem;