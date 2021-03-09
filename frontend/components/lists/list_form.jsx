import React from 'react';
import { withRouter } from 'react-router-dom'

class ListForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: '',
      id: ''
    }

    // this.update = this.update.bind(this)
  }

  render(){
    return(
      <div>
        Hello
      </div>
    )
  }
  
       
}

export default withRouter(ListForm);