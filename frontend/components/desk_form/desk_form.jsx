import React from 'react';

import { withRouter } from 'react-router-dom'

class DeskForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createDesk(this.state)
      .then(this.props.closeModal)
  }

  update(field){
    e => this.setState({[field]: e.currentTarget.value})
  }

  render(){
    return(
      <div className='desk-form-container'>
        <form onSubmit={this.handleSubmit} className='desk-form-box'>
          <div className='desk-form'>
              <input type="text"
                value={this.state.value}
                onChange={this.forceUpdate('title')}
                className='desk-input'
              />
          </div>

          <input type="submit" className='desk-submit' value={this.props.formType}/>
        </form>
      </div>
    )
  }
}

export default withRouter(DeskForm);