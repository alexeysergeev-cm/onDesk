import React from 'react';
import PaperEditContainer from './paper_edit_container'

class PaperIndexItem extends React.Component{
  constructor(props){
    super(props)


    this.titleUpdate = this.titleUpdate.bind(this)
    this.clickPaperItem = this.clickPaperItem.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(id){
    this.props.deletePaper(id)
    const newOrder = this.props.list.paper_order.filter(paperId => ""+paperId !== ""+id)

    this.props.updateList({
      id: this.props.listId,
      paper_order: newOrder,
    });
  }
  

  titleUpdate(e){
    e.stopPropagation();

    //find parents and children to manipulate DOM
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
    const { listId, openModal, comments } = this.props

    let descIcon;
    if (description !== null && description !== ''){
      descIcon = <i className="fa fa-align-left" aria-hidden="true" 
                    style={{fontSize: '15px', padding: '5px 8px 5px 2px'}}></i>
    }
    let chat;
    for (let item in comments){
      if (comments[item].paper_id === id){
        chat = <i className="fa fa-comment-o" aria-hidden="true"
                  style={{fontSize: '15px', padding: '3px 2px'}}></i>
        break
      }
    }


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
              <div onClick={() => openModal({'Add Description': [title, listId, id, description]})}>
                  Add Description
              </div>
              <div onClick={() => this.handleDelete(id)}>Delete Paper</div>
            </div>
          </div>
        </div>
        <div onClick={() => openModal({'Add Description': [title, listId, id, description]})}>
          {descIcon}
          {chat}
        </div>
      </>
    )
  }
}

export default PaperIndexItem;