import React from 'react';

class PaperIndexItem extends React.Component{
  constructor(props){
    super(props)
  }


  render(){
    const { title, id } = this.props.paper
    return(
      <>
        {title}
      </>
    )
  }
}

export default PaperIndexItem;