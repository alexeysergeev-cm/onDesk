import React from 'react';

class ListIndexItem extends React.Component{
  constructor(props){
    super(props)
  }


  render(){
    const { title, id } = this.props.list
    return(
        <div className='list-title-cont'>
          <div className="list-title">
            {title}
          </div>
          <div className="list-extras">
            <i className="fa fa-ellipsis-h" aria-hidden="true" ></i>
            <div className="delete-list" onClick={() => this.props.deleteList(id)}>Delete List</div>
          </div>
        </div>
    )
  }
}

export default ListIndexItem;