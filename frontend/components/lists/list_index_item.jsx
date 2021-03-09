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
            <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
          </div>
        </div>
    )
  }
}

export default ListIndexItem;