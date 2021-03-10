import React from 'react';
import PaperIndex from '../papers/paper_index_container'

class ListIndexItem extends React.Component{
  constructor(props){
    super(props)
  }


  render(){
    const { title, id } = this.props.list
    return(
      <>
        <div className='list-title-cont'>
          <div className="list-title">
            {title}
          </div>
          <div className="list-extras">
            <i className="fa fa-ellipsis-h" aria-hidden="true" ></i>
            <div className="delete-list" onClick={() => this.props.deleteList(id)}>Delete List</div>
          </div>
        </div>
        <PaperIndex 
          list_id={id}
        />
        <div className='open-paper-composer'>
          <span className="paper-new-click" onClick={this.handleClick}>
            <i className="fa fa-plus-square-o" aria-hidden="true"></i>
            Add a paper
          </span>        
          <div className="paper-form">
            {/* {form} */}
          </div>
        </div>
      </>
    )
  }
}

export default ListIndexItem;