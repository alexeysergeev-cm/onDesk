import React from 'react';
import { withRouter } from 'react-router-dom'

class ListForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: '',
      id: ''
    }

    this.update = this.update.bind(this)
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  render(){
    return(
      <div className="list-form-cont">
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            value={this.state.title}
            onChange={this.update('title')}
            className="list-title-input"
            placeholder="Add another list"
          />
          {/* <input type="submit" className="list-submit" value="Add"/> */}
        </form>
       
      </div>
    )
  }
  
       
}

export default withRouter(ListForm);