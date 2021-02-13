import React from 'react';

class IndexItem extends React.Component{
  constructor(props){
    super(props)

  }


  render(){
    const { title, id } = this.props.desk
    let dName = title;
    return(
      <div className='desk-tile-name' onClick={this.handleClick}>
        <div>{title}</div>
      </div>
    )
  }
}

export default IndexItem