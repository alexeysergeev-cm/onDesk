import React from 'react';

class IndexItem extends React.Component{
  constructor(props){
    super(props)

  }


  render(){
    const { title, id } = this.props.desk
    return(
      <div className='desk-index-item' onClick={this.handleClick}>
        <span>{title}</span>
        <span>{id}</span>
      </div>
    )
  }
}

export default IndexItem