import React from 'react';
import PaperEditContainer from './paper_edit_container'

class PaperIndexItem extends React.Component{
  constructor(props){
    super(props)


    this.titleUpdate = this.titleUpdate.bind(this)
  }

  titleUpdate(e){
    e.target.offsetParent.offsetParent.firstChild.style.display = 'none'
    e.target.offsetParent.offsetParent.lastChild.style.display = 'none'
    e.target.parentNode.parentElement.parentElement.children[1].style.display = 'flex'
    e.target.parentNode.parentElement.parentElement.children[1].firstElementChild.firstChild.focus()
  }


  render(){
    const { title, id } = this.props.paper
    const { listId } = this.props
    return(
      <>
        <div className='single-paper'>
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
              <div onClick={() => this.props.deletePaper(id)}>Delete Paper</div>
            </div>
          </div>
          
        </div>
      </>
    )
  }
}

export default PaperIndexItem;