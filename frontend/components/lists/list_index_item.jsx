import React from 'react';

class ListIndexItem extends React.Component{
  constructor(props){
    super(props)
  }


  render(){
    const { title, id } = this.props.list
    return(
      <div className='list-name'>
        <div>{title}</div>
      </div>
    )
  }
}

export default ListIndexItem;